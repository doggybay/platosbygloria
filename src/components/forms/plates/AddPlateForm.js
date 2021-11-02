import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { addOnePlate } from '../../../store/plates/actionCreators';



const AddPlateForm = (props) => {
  const { onClose } = props;
  const [state, setState] = useState({});
  const [linkToPic, setLinkToPic] = useState('');
  const [picDisplay, setPicDisplay] = useState('none')

  const dispatch = useDispatch();

  // handlers...
  const handleChange = e => {
    let name= e.target.name;
    let value = e.target.value;

    if (name === 'picture') {
      setLinkToPic(value);
      setPicDisplay('');
    }

    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOnePlate(state));
    onClose();
    

  };

  const handleCancel = () => {
    onClose();
  }

  // utils
  const checkFields = (obj) => {
    const stateToCheck = obj;
    
    if (stateToCheck.hasOwnProperty('name') && 
        stateToCheck.hasOwnProperty('description') &&
        stateToCheck.hasOwnProperty('picture') &&
        stateToCheck.hasOwnProperty('price') 
        ) {
      return false
    } else {
      return true
    }
    
  }

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 6 } }}>
      <Typography variant="h6" gutterBottom>
        Enter Plate Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="plateName"
            name="name"
            label="Plate name"
            fullWidth
            
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="picture"
            name="picture"
            label="Link to Picture"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="standard"
            onChange={handleChange}
            inputProps={{ maxLength: 12 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345, display: picDisplay }}>
            <CardMedia
              component="img"
              height="240"
              image={linkToPic}
              alt="plate picture"
            />
            
            
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            
            <Button variant="contained" onClick={handleCancel}>Cancel</Button>
            <Button disabled={checkFields(state)} variant="contained" onClick={handleSubmit}>Save</Button>
          </Stack>
        </Grid>

      </Grid>
    </Paper>
  );
}


export default AddPlateForm;

// link to picture 
//https://res.cloudinary.com/platosbygloria/image/upload/v1632088621/plates/molletes_bjahmu.jpg