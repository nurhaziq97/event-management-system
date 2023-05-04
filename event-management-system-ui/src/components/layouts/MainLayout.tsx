import SidebarComponent from "@/components/SidebarComponent";
import TopbarComponent from "@/components/TopbarComponent";
import Head from "next/head";
import MainLayoutContent from "../MainLayoutContent";
import {UiTMTheme} from "@/themes/uitm-theme";
import { ThemeProvider } from "@emotion/react";
import { useProSidebar } from "react-pro-sidebar";



const MainLayout = (props:any) => {
  const { collapseSidebar, broken, toggleSidebar } = useProSidebar();
  return (
    <main>
      <Head>
        <title>Event Management System</title>
        <link rel="icon" href="main-logo.svg" />
      </Head>
      <div className="flex flex-col">
        <ThemeProvider theme={UiTMTheme}>
          <TopbarComponent collapseSidebar={collapseSidebar} broken={broken} toggleSidebar={toggleSidebar}/>
          <div className="flex max-h-[93vh] overflow-hidden">
            <SidebarComponent/>
            {props.children}
          </div>
        </ThemeProvider>
      </div>
    </main >
  );
}

export default MainLayout;