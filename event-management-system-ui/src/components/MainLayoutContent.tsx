import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import React from "react";

const MainLayoutContent = (props: any) => {

  const titlePage = props?.title ? props.title : "Dashboard";
  return (
    <div className={`${props.className} bg-white text-black w-full h-screen p-1 overflow-y-auto`} style={{ 'fontFamily': 'Montserrat, sans-serif' }}>
      <div className="m-3 ml-5 mt-5">
        <div className="text-4xl">
          {titlePage}
        </div>
        <div className="">
        </div>
        <div className="flex flex-col md:flex-row mt-8 bg-black ">
          {props.children}
        </div>
      </div>
    </div>);
}

export default MainLayoutContent;