import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Movies } from "./Movies";
import { Cinema } from "./Cinema";
import { SearchBar } from "./Searchbar";
import{useHistory} from "react-router-dom"
import Filters from "./Filters";
import './index.css';
import { Link } from "@mui/material";


function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MovieCinema() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history=useHistory()
  console.log(history)

  // const handleCities=()=>{
  //   alert("hi")
  // history.push('/signup')
  // }
 
  // const histroy=useHistory()
  // const handleCities=()=>{
  //   history.push()
  // }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{p:1, flexGrow:72, borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Movies" {...a11yProps(0)} />
          <Tab label="Cinemas" {...a11yProps(1)} /><br/>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span></span>&nbsp;&nbsp;
          <span></span>*/}
          <Box sx={{ p: 2,flexGrow:20 }} style={{display:"flex",justifyContent:"flex-end"}}> 
                <span >Showing cinemas in Mumbai</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                <span style={{ color: "#1976d2"}}  onClick={()=>history.push('./cities')}><Link>Change City?</Link></span>
              </Box>
        </Tabs>
      </Box>
      <br />
      <Box sx={{p:1, flexGrow:20, }} style={{display:"flex",justifyContent:"flex-start"}}>
        
      <SearchBar />
      
      
        <Filters/>
       
    
      </Box >
     
      <br/>

      <TabPanel value={value} index={0}>
        <Movies />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cinema />
      </TabPanel>
     
    </Box>
  );
}
