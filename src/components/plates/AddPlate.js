import Dialog from '@mui/material/Dialog';
import Container from '@material-ui/core/Container';

import AddPlateForm from '../forms/plates/AddPlateForm';



const AddPlate = (props) => { 
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open} maxWidth="md">
      <Container maxWidth="md" >
        <AddPlateForm onClose={onClose} />
      </Container>
    </Dialog>
  );
}

export default AddPlate;