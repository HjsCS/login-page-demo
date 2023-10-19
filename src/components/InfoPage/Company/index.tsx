import React from "react";
import CompanyLogo from "@/assets/InfoPageCompanyLogo.svg";
import style from "./index.module.scss";
import LeftArrow from "@/assets/InfoPageLeftArrow.svg";
import RightArrow from "@/assets/InfoPageRightArrow.svg";

const Company = (props: any) => {
  return (
    <div className={style.company_box} {...props}>
      <div className={style.company_name_box}>
        <CompanyLogo data-testid="companyLogo" />
        <p>Bolt Agency</p>
      </div>

      <div className={style.arrows_box}>
        <LeftArrow data-testid="leftArrow" />
        <RightArrow data-testid="rightArrow" />
      </div>
    </div>
  );
};

export default Company;
