import React from "react";

const CardLayout = (props) => {
  return (
    <div className={"shadow-lg rounded-md " + props.className}>
      {props.children}
    </div>
  );
};

export default CardLayout;
