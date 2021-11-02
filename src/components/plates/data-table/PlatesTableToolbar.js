import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { alpha } from '@mui/material/styles';

import AddPlate from '../AddPlate';


const PlatesTableToolbar = (props) => {
  const { numSelected, handleDelete } = props;
  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };


  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Plates
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete Plate">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <div>
          <Tooltip title="Add New Plate">
            <IconButton onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <AddPlate open={open} onClose={handleClose} />
        </div>
      )}
    </Toolbar>
  );
};

export default PlatesTableToolbar;