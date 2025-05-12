import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h1 className="text-red-500 bg-amber-100">Navbar</h1>
      <Outlet></Outlet>
      <h1 className="text-red-500 bg-amber-100">Footer</h1>
    </div>
  );
};

export default MainLayout;
