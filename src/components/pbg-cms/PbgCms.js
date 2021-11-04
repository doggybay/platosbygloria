import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Customers from '../customers/Customers';
import PlatesTable from '../plates/PlatesTable';



function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: '100%' }}>
          {children} 
        </Box>
      )}
    </div>
  );
}



const PbgCms = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ width: '100%' }}>
          <Paper variant="outlined" >
            <Box sx={{  borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Customers" id="customers" />
                <Tab label="Plates" id="plates" />
              </Tabs>
            </Box>
          </Paper> 
          <TabPanel value={value} index={0}>
            <Customers />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PlatesTable />
          </TabPanel>
        </Box>
      </Container>
    </div>
  )
}

export default PbgCms;