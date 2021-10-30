import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { addOneCustomer } from '../../../store/customers/actionCreators';



const AddCustomerForm = (props) => {
  const { onClose } = props;
  const [state, setState] = useState({});

  const dispatch = useDispatch();


  // handlers...
  const handleChange = e => {
    let name= e.target.name;
    let value = e.target.value;


    setState({
      ...state,
      [name]: value
    });
  };
  console.log('addcustform state: ', state)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addOneCustomer(state));
    onClose();
    

  };

  const handleCancel = () => {
    onClose();
  }

  const checkFields = (obj) => {
    const stateToCheck = obj;
    
    if (stateToCheck.hasOwnProperty('first_name') && 
        stateToCheck.hasOwnProperty('last_name') &&
        stateToCheck.hasOwnProperty('email') &&
        stateToCheck.hasOwnProperty('phone') &&
        stateToCheck.hasOwnProperty('st_address') &&
        stateToCheck.hasOwnProperty('city') &&
        stateToCheck.hasOwnProperty('state') &&
        stateToCheck.hasOwnProperty('zip_code')
        ) {
      return false
    } else {
      return true
    }
    
  }


  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 6 } }}>
      <Typography variant="h6" gutterBottom>
        Enter Customer Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="tel"
            variant="standard"
            onChange={handleChange}
            inputProps={{ maxLength: 12 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="st_address"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            error={false}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
            onChange={handleChange}
            inputProps={{ maxLength: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="zip"
            name="zip_code"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
            variant="standard"
            onChange={handleChange}
            inputProps={{ maxLength: 5 }}
          />
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

export default AddCustomerForm;

{/* <Grid item xs={12}>
<TextField
  id="address2"
  name="opt_address"
  label="Address line 2"
  fullWidth
  autoComplete="address-line2"
  variant="standard"
  onChange={handleChange}
/>
</Grid> */}