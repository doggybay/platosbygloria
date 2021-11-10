import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PlateRow from './PlateRow';
import PlatesTableToolbar from './data-table/PlatesTableToolbar';
import PlatesTableHead from './data-table/PlatesTableHead';
import { getComparator, stableSort } from '../utils/dataTable';
import { deletePlates } from '../../store/plates/actionCreators';



const PlatesTable = () => {
  const dispatch = useDispatch();
  const plates = useSelector(state => state.plates.all);
  const rows = plates;

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [ids, setIds] = useState([]);
  const [custId, setCustId] = useState(0);

  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    let newIds = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      newIds = newIds.concat(ids, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newIds = newIds.concat(ids.slice(1)); 
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newIds = newIds.concat(ids.slice(0, -1));  
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      newIds = newIds.concat(
        ids.slice(0, selectedIndex),
        ids.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    setIds(newIds);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => {
    return (selected.indexOf(id) !== -1)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deletePlates(ids));
    setSelected([]);
  };

  const getPlate = (id) => { 
    setCustId(id)
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


  const listOfPlates = stableSort(rows, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <PlateRow 
            key={row.id}
            isItemSelected={isItemSelected} 
            labelId={labelId}
            handleClick={handleClick}
            row={row}
            getPlate={getPlate}
            openViewDetails={handleClickOpen}
            closeViewDetails={handleClose}
            open={open}
            plate={plates.filter(plate => plate.id === custId)}
            />
          );
        });

  return (
    <div>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <PlatesTableToolbar numSelected={selected.length} handleDelete={handleDelete}  />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="customersTable"
          >
            <PlatesTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {listOfPlates}
              {emptyRows > 0 && (
                <TableRow>
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
  )
}

export default PlatesTable