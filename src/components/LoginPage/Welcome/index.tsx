import React from "react";
import style from "./index.module.scss";

const Welcome = () => {
  return (
    <div className={style.welcome_box}>
      <h1 className={style.title}>Welcome Back</h1>
      <p className={style.context}>Welcome back! Please enter your details.</p>
    </div>
  );
};

export default Welcome;
