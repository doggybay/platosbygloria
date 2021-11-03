import Dialog from '@mui/material/Dialog';
import Container from '@material-ui/core/Container';

import EditPlateForm from '../forms/plates/EditPlateForm';

const PlateDetails = (props) => {
  const { close, open, plate} = props;

  return (
    <Dialog onClose={close} open={open} maxWidth="md">
      <Container maxWidth="md">
        <EditPlateForm plate={plate} />
      </Container>
    </Dialog>
  );
};

export default PlateDetails;