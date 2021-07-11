import { useMediaQuery } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { PlanVoiceData } from "../../data/usePriceData";
import PlanList from "../../features/HomePage/PlanList";
import "../../styles/global.css";
import useSaveLSData from "../../utils/useSaveLSData";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  appBarRoot: {
    borderRadius: "10px",
  },
  tabsRoot: {
    backgroundColor: theme.palette.background.default,
    borderRadius: "10px",
  },
  tabsFixed: {
    overflowX: "auto",
  },
  tabRoot: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    borderRight: "solid 3px #dfdfdf",
    fontSize: "1.5rem",
    paddingTop: "20px",
    paddingBottom: "20px",
    "&:last-child": {
      borderRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  selectedTabRoot: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff !important",
  },
}));

interface TabsCompProps {
  tabContent: PlanVoiceData[];
  tabList: string[];
}

const TabsComp: React.FC<TabsCompProps> = ({ tabContent, tabList }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:900px)");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setLSData(newValue);
  };

  const { setLSData, getLSData } = useSaveLSData();
  const lastSavedTab = parseInt(getLSData() || "2");
  const [value, setValue] = React.useState(lastSavedTab);

  return (
    <Box className={classes.root} mt={5} px={matches ? 15 : 4}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBarRoot}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          classes={{ root: classes.tabsRoot }}
          style={{ overflowX: "auto" }}
        >
          {tabList.map((item, index) => (
            <Tab
              label={item}
              {...a11yProps({ index })}
              classes={{
                root: classes.tabRoot,
                selected: classes.selectedTabRoot,
              }}
              key={index}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabList.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <PlanList plans={tabContent[index].plans} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabsComp;
