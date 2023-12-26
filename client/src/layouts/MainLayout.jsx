import React from "react";

const MainLayout = (props) => {
  return (
    <div className="border-red-500 flex w-full h-full">{props.children}</div>
  );
};

export default MainLayout;
