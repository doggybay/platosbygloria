import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import EditIcon from '@mui/icons-material/Edit';

import { updateOneCustomer } from '../../../store/customers/actionCreators';


const EditCustomerForm = (props) => {
  const { customer, address } = props;
  
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({});

  const dispatch = useDispatch();
  

  const editCustomer = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleChange = e => {
    let name= e.target.name;
    let value = e.target.value;

    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateOneCustomer(customer.id, state));
    setEdit(false)

  };

  const checkFields = (obj) => {
    const stateToCheck = obj;
    
    if (stateToCheck.hasOwnProperty('first_name') || 
        stateToCheck.hasOwnProperty('last_name') ||
        stateToCheck.hasOwnProperty('email') ||
        stateToCheck.hasOwnProperty('phone') ||
        stateToCheck.hasOwnProperty('st_address') ||
        stateToCheck.hasOwnProperty('city') ||
        stateToCheck.hasOwnProperty('state') ||
        stateToCheck.hasOwnProperty('zip_code')
        ) {
      return false
    } else {
      return true
    }
    
  };


  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 6 } }}>
      <Toolbar>
        <Typography variant="h6" gutterBottom>
          Customer Details
        </Typography>
        {!edit ? (
          <Tooltip title="Edit Customer">
            <IconButton onClick={editCustomer}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        ) : ''}
        
      </Toolbar>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            required
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={customer.first_name}
            onChange={handleChange}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={customer.last_name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            defaultValue={customer.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="tel"
            variant="standard"
            defaultValue={customer.phone}
            inputProps={{ maxLength: 12 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled={edit ? false : true}
            required
            id="address1"
            name="st_address"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
            variant="standard"
            defaultValue={address.length === 1 ? address[0].st_address : ''}
            onChange={handleChange}
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
            variant="standard"
            defaultValue={address.length === 1 ? address[0].city : ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            disabled={edit ? false : true}
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
            defaultValue={address.length === 1 ? address[0].state : ''}
            inputProps={{ maxLength: 2 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            disabled={edit ? false : true}
            required
            id="zip"
            name="zip_code"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
            variant="standard"
            inputProps={{ maxLength: 5 }}
            defaultValue={address.length === 1 ? address[0].zip_code : ''}
            onChange={handleChange}
          />
        </Grid>
        {edit ? (
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleCancel}>Cancel</Button>
              <Button variant="contained" disabled={checkFields(state)} onClick={handleSubmit}>Update</Button>
            </Stack>
          </Grid>
        ) : ''}
        
      </Grid>
  </Paper>
  );
}

export default EditCustomerForm;

{/* <Grid item xs={12}>
  <Stack spacing={2} direction="row">
    <Button variant="contained" onClick={handleCancel}>Cancel</Button>
    <Button disabled={checkFields(state)} variant="contained" onClick={handleSubmit}>Save</Button>
  </Stack>
</Grid> */}