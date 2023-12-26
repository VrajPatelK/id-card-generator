import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MainLayout from "../layouts/MainLayout";

const Root = () => {
  return (
    <MainLayout>
      <SideBar />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default Root;
