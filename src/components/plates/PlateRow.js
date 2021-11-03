import { useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import PlateDetails from './PlateDetails';


const PlateRow = (props) => {
  const { row, isItemSelected, labelId, handleClick, getPlate, plate } = props;
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
      onClick={() => getPlate(row.id)}
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
        {row.name}
      </TableCell>
      <TableCell align="left">{row.description}</TableCell>
      <TableCell align="left">{row.price}</TableCell>
      <TableCell align="left">
        <Tooltip title="View Details">
          <IconButton onClick={openViewDetails}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <PlateDetails open={open} close={closeViewDetails} plate={plate[0]} />
      </TableCell>
    </TableRow>
  )
}

export default PlateRow;