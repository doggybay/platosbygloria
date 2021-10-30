import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';


const Customer = (props) => {
  const { isItemSelected, labelId, handleClick, row } = props;


  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.first_name, row.id)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
      
    >
      <TableCell padding="checkbox">
        <Checkbox
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
      
    </TableRow>
  );
};

export default Customer;