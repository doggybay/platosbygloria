import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';

import Customers from '../customers/Customers';
import PlatesTable from '../plates/PlatesTable';
import TabPanel from './TabPanel';

import { fetchAllPlates } from '../../store/plates/actionCreators';
import { fetchAllCustomers } from '../../store/customers/actionCreators';




const PbgCms = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(fetchAllPlates());
    dispatch(fetchAllCustomers());
  });

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ width: '100%' }}>
          <Paper variant="outlined" sx={{ marginTop: "5rem" }} >
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