import { Box } from "@mui/material";
export const  CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx = {{marginTop:'20px'}}>{children}</Box>}
      </div>
    );
  }  
 export const  a11yProps = (index) =>  {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }