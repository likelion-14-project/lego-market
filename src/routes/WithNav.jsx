import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/navBar/NavBar"

const WithNav = () => {
  return (
      <>
          <NavBar />
          <Outlet />
      </>
  );
};
export default WithNav


