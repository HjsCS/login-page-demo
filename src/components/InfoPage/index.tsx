import React from "react";
import Quote from "./Quote";
import Author from "./Author";
import Company from "./Company";
import style from "./index.module.scss";

const InfoPage = () => {
  return (
    <div className={style.info_page_box}>
      <Quote data-testid="quote" />
      <Author data-testid="author" />
      <Company data-testid="company" />
    </div>
  );
};

export default InfoPage;
