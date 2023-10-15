import React from "react";
import style from "./index.module.scss";

const SignUpLink = () => {
  return (
    <div className={style.sign_up_link_box}>
      <p className={style.normal_text}>Need an account?</p>
      <p className={style.underline_text}>Create an account</p>
    </div>
  );
};

export default SignUpLink;
