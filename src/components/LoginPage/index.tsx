import React from "react";
import style from "./index.module.scss";
import Welcome from "./Welcome";
import SignInForm from "./SignInForm";
import SignInButton from "./SignInButton";
import FigmaLogo from "@/assets/LoginPageFigmaLogo.svg";
import SignUpLink from "./SignUpLink";

const LoginPage = () => {
  return (
    <div className={style.login_page_box}>
      <div className={style.components_box}>
        <FigmaLogo />
        <Welcome />
        <SignInForm />
        {/* <SignInButton /> */}
        <SignUpLink />
      </div>
    </div>
  );
};

export default LoginPage;
