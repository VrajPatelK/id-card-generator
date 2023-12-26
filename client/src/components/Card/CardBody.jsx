import React from "react";

const CardBody = (props) => {
  return <div className={"p-2 " + props.className}>{props.children}</div>;
};

export default CardBody;
