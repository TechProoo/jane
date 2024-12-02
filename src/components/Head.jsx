import React from "react";
import { Fade } from "react-awesome-reveal";

const Head = ({topic}) => {
  return (
    <div>
      <div className="thd_hd">
        <Fade direction="down">
        <h1>{topic}</h1>
        </Fade>
      </div>
    </div>
  );
};

export default Head;
