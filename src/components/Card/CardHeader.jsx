import React from "react";

const CardHeader = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default CardHeader;
