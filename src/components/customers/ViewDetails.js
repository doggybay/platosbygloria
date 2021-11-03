import Dialog from '@mui/material/Dialog';
import Container from '@material-ui/core/Container';

import EditCustomerForm from '../../components/forms/customers/EditCustomerForm';


const ViewDetails = (props) => {
  const { close, open, customer} = props;
  const address = customer ? customer.address : [];

  return (
    <Dialog onClose={close} open={open} maxWidth="md">
      <Container maxWidth="md">
        <EditCustomerForm customer={customer} address={address} />
      </Container>
    </Dialog>
  );
};

export default ViewDetails;