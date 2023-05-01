import MainLayoutContent from "@/components/MainLayoutContent";
import MainLayout from "@/components/layouts/MainLayout";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const DashboardElementStatusComponent = (props: any) => {
  return (
    <div className="basis-1/3 rounded-lg max-h-40 min-h-fit md:min-h-[9rem]" style={props.style}>
      <Typography color={props.style?.color} align={"center"} variant="h1">
        {/* aasdasd<br/> */}
      </Typography>
    </div>
  );
}

const EventTabComponent = () => {

}


const Dashboard = () => {
  const materialUiTheme = useTheme();
  const themeMode = 'light';

  const theme = {
    light: {
      eventsAttend: {
        backgroundColor: materialUiTheme.palette.success.main,
        color: '#ffffff',
      },
      eventsOrganized: {
        backgroundColor: materialUiTheme.palette.info.main,
        color: '#ffffff',
      },
      eventsActive: {
        backgroundColor: materialUiTheme.palette.warning.main,
        color: '#000000',
      },
    }
  };
  const containerContents = [
    {
      text: 'Events Attends',
      backgroundColor: theme[themeMode].eventsAttend.backgroundColor,
      color: theme[themeMode].eventsAttend.color,
    },
    {
      text: 'Events Organized',
      backgroundColor: theme[themeMode].eventsOrganized.backgroundColor,
      color: theme[themeMode].eventsOrganized.color
    },
    {
      text: 'Events Active',
      backgroundColor: theme[themeMode].eventsActive.backgroundColor,
      color: theme[themeMode].eventsActive.color
    }
  ];

  const dashboardElementStatus = containerContents.map((item, index) => {
    return (
      <DashboardElementStatusComponent key={index} style={item} />
    );
  })

  return(
    <MainLayout>
      <MainLayoutContent title='Dashboard'>
        <div className="dashboard-element-status-component flex flex-col md:flex-row 
        space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full justify-center md:justify-start
        bg-red-200">
          {dashboardElementStatus}
        </div>
      </MainLayoutContent>
    </MainLayout>
  );
}

export default Dashboard;