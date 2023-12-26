import React from "react";

const CardFooter = (props) => {
  return <div className={"p-2 " + props.className}>{props.children}</div>;
};

export default CardFooter;
