import React from "react";
import style from "./index.module.scss";
import Star from "@/assets/InfoPageStar.svg";

const Author = (props: any) => {
  return (
    <div className={style.author_box} {...props}>
      ß<p className={style.author_name}>Mischca Sullivan</p>
      <div className={style.stars}>
        <Star data-testid="star-icon" />
        <Star data-testid="star-icon" />
        <Star data-testid="star-icon" />
        <Star data-testid="star-icon" />
        <Star data-testid="star-icon" />
      </div>
    </div>
  );
};

export default Author;
