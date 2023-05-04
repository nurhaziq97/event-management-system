import MainLayoutContent from "@/components/MainLayoutContent";
import MainLayout from "@/components/layouts/MainLayout";
import { useTheme } from "@emotion/react";
import { Tabs, Tab, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { UiTMTheme } from "@/themes/uitm-theme";


const TabPanel = (props:any) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Typography>{children}</Typography>
      )}
    </div>
  );
};

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

const tabComponentProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

const Dashboard = () => {
  const materialUiTheme = useTheme();
  const themeMode = 'light';
  const [tabState, setTabState] = useState(0);
  const [tab0, setTab0] = useState({
    'backgroundColor' :  materialUiTheme.palette.success.main
  });
  const [tab1, setTab1] = useState({
    'backgroundColor' : 'transparent'
  });
  const activeTab = {
    'backgroundColor': materialUiTheme.palette.success.light,
    'color': '#ffffff'
  }
  const inactiveTab = {
    'backgroundColor': 'transparent',
    'color': '#000000'
  }

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

  const handleTabChange = (event:any, newTabState: any) => {
    if(newTabState === 1) {
      setTab1((oldProps) => ({
        ...oldProps,
        ...activeTab
      }));
      setTab0((oldProps) => ({
        ...oldProps,
        ...inactiveTab,
      }));
    }else {
      setTab1((oldProps) => ({
        ...oldProps,
        ...inactiveTab,
      }));
      setTab0((oldProps) => ({
        ...oldProps,
        ...activeTab
      }));
    }
    setTabState(newTabState);
  }

  useEffect(()=> {
    handleTabChange(onload, 0);
  }, []);

  const dashboardElementStatus = containerContents.map((item, index) => {
    return (
      <DashboardElementStatusComponent key={index} style={item} />
    );
  });

  return (
    <MainLayout>
      <ThemeProvider theme={UiTMTheme}>
      <MainLayoutContent title='Dashboard'>
        <div className="dashboard-element-status-component flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full justify-center md:justify-start">
          {dashboardElementStatus}
        </div>
        <Tabs 
          value={tabState}
          onChange={handleTabChange}
          centered
          indicatorColor="none"
          variant="fullWidth"
          style={{
            'backgroundColor': '#b1b2b5'
          }}
          className="mt-10 rounded-lg">
          <Tab label="All Events" style={{...tab0}} className={`rounded-lg grow`}/>
          <Tab label="My Events" style={{...tab1}}  className="rounded-lg w-full"/>
        </Tabs>
        <TabPanel value={tabState} index={0}>
          Item One - Datatable 1
        </TabPanel>
        <TabPanel value={tabState} index={1}>
          Item Two - Datatable 2
        </TabPanel>
      </MainLayoutContent>
      </ThemeProvider>
    </MainLayout>
  );
}

export default Dashboard;