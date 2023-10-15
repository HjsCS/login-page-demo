import React from "react";
import Button from "@mui/material/Button";
import style from "./index.module.scss";
import GoogleIcon from "@/assets/LoginPageGoogleIcon.svg";

const SignInButton = () => {
  return (
    <div className={style.sign_in_button_box}>
      <Button variant="contained" className={style.normal_button}>
        Sign in
      </Button>
      <Button variant="contained" className={style.google_button}>
        <div>
          <GoogleIcon />
        </div>
        {"  "}
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInButton;
