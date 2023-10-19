import React from "react";
import style from "./index.module.scss";

const Quote = (props: any) => {
  return (
    <div className={style.quote_box} {...props}>
      <p className={style.paragraph}>
        “Untitled truly has solved all our design and content problems, freeing
        up our time to work on more important things. We can’t imagine working
        without it.’
      </p>
    </div>
  );
};

export default Quote;
