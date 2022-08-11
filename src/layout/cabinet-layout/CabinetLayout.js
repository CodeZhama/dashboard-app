import React from "react";
import styled from "styled-components";

//
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Outlet } from "react-router-dom";
//
export default function CabinetLayout() {
  return (
    <>
      <Navbar />
      <FlexStyle>
        <Sidebar />
        <Outlet />
      </FlexStyle>
    </>
  );
}

const FlexStyle = styled.section`
  display: flex;
 
`;
