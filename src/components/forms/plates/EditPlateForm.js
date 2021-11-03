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
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { updateOnePlate } from '../../../store/plates/actionCreators';
import { checkEditFields } from './utils';


const EditPlateForm = (props) => {
  const { plate } = props;
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({});
  const [linkToPic, setLinkToPic] = useState('');

  const dispatch = useDispatch();
  

  const editPlate = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    setState({})
    setLinkToPic('')
  };

  const handleChange = e => {
    let name= e.target.name;
    let value = e.target.value;

    if (name === 'picture') {
      setLinkToPic(value);
    }

    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateOnePlate(plate.id, state));
    setEdit(false)

  };


  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 6 } }}>
      <Toolbar>
        <Typography variant="h6" gutterBottom>
          Plate Details
        </Typography>
        {!edit ? (
          <Tooltip title="Edit Plate">
            <IconButton onClick={editPlate}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        ) : ''}
      </Toolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            disabled={edit ? false : true}
            required
            id="plateName"
            name="name"
            label="Plate name"
            fullWidth
            variant="standard"
            defaultValue={plate.name}
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            required
            id="picture"
            name="picture"
            label="Link to Picture"
            fullWidth
            variant="standard"
            defaultValue={plate.picture}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="standard"
            defaultValue={plate.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={edit ? false : true}
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            variant="standard"
            defaultValue={plate.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={linkToPic === '' ? plate.picture : linkToPic}
              alt="plate picture"
            />
          </Card>
        </Grid>0
        {edit ? (
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleCancel}>Cancel</Button>
              <Button variant="contained" disabled={checkEditFields(state)} onClick={handleSubmit}>Update</Button>
            </Stack>
          </Grid>
        ) : ''}
      </Grid>
  </Paper>
  );
}

export default EditPlateForm;