import React from "react";
import CompanyLogo from "@/assets/InfoPageCompanyLogo.svg";
import style from "./index.module.scss";
import LeftArrow from "@/assets/InfoPageLeftArrow.svg";
import RightArrow from "@/assets/InfoPageRightArrow.svg";

const Company = () => {
  return (
    <div className={style.company_box}>
      <div className={style.company_name_box}>
        <CompanyLogo />
        <p>Bolt Agency</p>
      </div>

      <div className={style.arrows_box}>
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );
};

export default Company;
