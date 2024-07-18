import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
    <Head/>
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className={isMenuOpen ? "col-span-10" : "col-span-12"}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Body;

