import Head from "next/head";
import React from "react";
import TopbarComponent from "@/components/TopbarComponent";

const Main = (props) => {
  return (
    <div>
      <Head>
        <title>Event Management System</title>
      </Head>
      <TopbarComponent />
    </div>
  );
}

export default Main;