import React from "react";

const Heading = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Heading;
