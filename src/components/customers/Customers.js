import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { customersStyles } from '../../styles/customers/styles';
import { deleteCustomers } from '../../store/customers/actionCreators';
import EnhancedTableToolbar from '../data-table/EnhancedTableToolbar';
import EnhancedTableHead from '../data-table/EnhancedTableHead';
import Customer from './Customer';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



const Customers = () => {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.all);
  const rows = customers;
  
  const classes = customersStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [ids, setIds] = useState([])


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      const newIds = rows.map((n) => n.id);
      setSelected(newSelecteds);

      console.log('select all: ', newIds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    let newIds = [];

    console.log('chkbox handleclick1: ', selected)

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      newIds = newIds.concat(ids, id);
      console.log('chkbox handleclick2: ', newSelected)
      console.log('chkbox handleclick2: ', newIds)

    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newIds = newIds.concat(ids.slice(1));
      console.log('chkbox handleclick3: ', newSelected)
      console.log('chkbox handleclick3: ', newIds)
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newIds = newIds.concat(ids.slice(0, -1));
      console.log('chkbox handleclick4: ', newSelected)
      console.log('chkbox handleclick4: ', newIds)
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      newIds = newIds.concat(
        ids.slice(0, selectedIndex),
        ids.slice(selectedIndex + 1),
      );
      
      console.log('chkbox handleclick5: ', newSelected)
      console.log('chkbox handleclick5: ', newIds)
    }

    setSelected(newSelected);
    setIds(newIds);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => {
    console.log('isSelected: ', id)

    return (selected.indexOf(id) !== -1)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    
  };

  const handleDelete = () => {
    dispatch(deleteCustomers(ids))

  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (value) => {
  //   setOpen(false);
    
  // };  

  const listOfCustomers = stableSort(rows, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;
        console.log('list of customers: ', isItemSelected)

        return (
          <Customer 
            key={row.id}
            isItemSelected={isItemSelected} 
            labelId={labelId}
            handleClick={handleClick}
            row={row} 
            />
          );
      })  

  return (
    <div>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} handleDelete={handleDelete}  />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="customersTable"
            
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {listOfCustomers}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Customers;

