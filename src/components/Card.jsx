import React from "react";

const Card = ({head, body}) => {
  return (
    <div className="cd_cv">
      <div className="cd_hd">
        <h2>{head}</h2>
      </div>
      <div className="cd_bd mt-5">
        <p>
          {body}
        </p>
      </div>
    </div>
  );
};

export default Card;
