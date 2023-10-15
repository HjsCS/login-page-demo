import React from "react";
import Quote from "./Quote";
import Author from "./Author";
import Company from "./Company";
import style from "./index.module.scss";

const InfoPage = () => {
  return (
    <div className={style.info_page_box}>
      <Quote />
      <Author />
      <Company />
    </div>
  );
};

export default InfoPage;
