import SidebarComponent from "@/components/SidebarComponent";
import TopbarComponent from "@/components/TopbarComponent";
import Head from "next/head";

const MainLayout = (props) => {
  return (
    <div style={{ height: '95vh' }}>
      <Head>
        <title>Event Management System</title>
        <link rel="icon" href="main-logo.svg" />
      </Head>
      <TopbarComponent />
      <div style={{display: 'flex', height: '100%'}}>
        <SidebarComponent>
          <main>
            <div>
              test
            </div>
          </main>
        </SidebarComponent>
      </div>
    </div>
  );
}

export default MainLayout;