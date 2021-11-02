import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';

import Customers from '../customers/Customers';
import PlatesTable from '../plates/PlatesTable';


const PbgCms = () => {

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ width: '100%' }}>
          <PlatesTable />
        </Box>
      </Container>
    </div>
  )
}

export default PbgCms;