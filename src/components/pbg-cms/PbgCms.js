import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import Customers from '../customers/Customers';


const PbgCms = () => {

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ width: '100%' }}>
          <Customers />
        </Box>
      </Container>
    </div>
  )
}

export default PbgCms;