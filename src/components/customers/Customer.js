import { useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ViewDetails from './ViewDetails';


const Customer = (props) => {
  const { customer, isItemSelected, labelId, handleClick, row, getCustomer } = props;
  const [open, setOpen] = useState(false);


  const openViewDetails = () => {
    setOpen(true);
  };

  const closeViewDetails = () => {
    setOpen(false);
  };
  
  

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
      onClick={() => getCustomer(row.id)}
    >
      <TableCell padding="checkbox">
        <Checkbox
          onClick={() => handleClick(row.id)}
          color="primary"
          checked={isItemSelected}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </TableCell>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        padding="none"
      >
        {row.first_name}
      </TableCell>
      <TableCell align="left">{row.last_name}</TableCell>
      <TableCell align="left">{row.phone}</TableCell>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="left">
        <Tooltip title="View Details">
          <IconButton onClick={openViewDetails}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <ViewDetails open={open} close={closeViewDetails} customer={customer[0]} /> 
      </TableCell>
    </TableRow>
  );
};

export default Customer;