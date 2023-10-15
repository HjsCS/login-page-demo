import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import style from "./index.module.scss";
import GoogleIcon from "@/assets/LoginPageGoogleIcon.svg";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (inputEmail: string) => {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(inputEmail);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (email && password) {
      console.log(email, password);
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <form className={style.sign_in_form_box}>
      <TextField
        className={style.email}
        label="Email"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
        required
        error={emailError}
        helperText={emailError ? "Please enter a valid email" : ""}
      />
      <TextField
        className={style.password}
        label="Password"
        variant="standard"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
        error={passwordError}
        helperText={
          passwordError ? "Password must be at least 6 characters" : ""
        }
      />
      <div
        className={style.sign_in_button_box}
        style={{
          backgroundColor: "#000",
        }}
      >
        <Button
          variant="contained"
          type="submit"
          className={style.normal_button}
          onClick={handleSubmit}
        >
          Sign in
        </Button>
        <Button
          variant="contained"
          className={style.google_button}
          style={{
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <div>
            <GoogleIcon />
          </div>
          {"  "}
          Sign in with Google
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
