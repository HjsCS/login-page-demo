import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import style from "./index.module.scss";
import GoogleIcon from "@/assets/LoginPageGoogleIcon.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please input a valid email")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Please input a valid email"
      )
      .test(
        "no-spaces",
        "Email should not have spaces",
        (value) => !/\s/.test(value ?? "")
      ),
    password: yup
      .string()
      .min(8, "Password should be at least 8 characters long")
      .max(20, "Password should be no more than 20 characters long")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter (A-Z)")
      .matches(/[a-z]/, "Must contain at least one lowercase letter (a-z)")
      .matches(/[0-9]/, "Must contain at least one number (0-9)")
      .matches(
        /[^a-zA-Z0-9]/,
        "Must contain at least one special character (!@#$%^&*.,)"
      )
      .test(
        "no-spaces",
        "Password should not have spaces",
        (value) => !/\s/.test(value ?? "")
      ),
  })
  .required();

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.sign_in_form_box}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="standard"
            error={!!errors.email}
            helperText={errors.email?.message}
            required
            className={style.email}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            variant="standard"
            error={!!errors.password}
            helperText={errors.password?.message}
            required
            type="password"
            className={style.password}
          />
        )}
      />

      <div className={style.sign_in_button_box}>
        <Button
          variant="contained"
          type="submit"
          className={style.normal_button}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          className={style.normal_button}
        >
          Sign In with Google
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
