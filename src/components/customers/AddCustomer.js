import Dialog from '@mui/material/Dialog';
import AddCustomerForm from '../forms/customers/AddCustomerForm';
import Container from '@material-ui/core/Container';



const AddCustomer = (props) => { 
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open} maxWidth="md">
      <Container maxWidth="md" >
        <AddCustomerForm onClose={onClose} />
      </Container>
    </Dialog>
  );
}

export default AddCustomer;