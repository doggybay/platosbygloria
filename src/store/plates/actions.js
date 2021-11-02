import * as constants from './constants';

const fetchAllPlatesPending = () => ({
  type: constants.FETCH_ALL_PLATES_PENDING
});

const fetchAllPlatesSuccess = (plates) => ({
  type: constants.FETCH_ALL_PLATES_SUCCESS,
  payload: plates
})

const fetchAllPlatesFailed = (err) => ({
  type: constants.FETCH_ALL_PLATES_FAILED,
  payload: err
}) 

const fetchOnePlatePending = () => ({
  type: constants.FETCH_ONE_PLATE_PENDING
});

const fetchOnePlateSuccess = (plate) => ({
  type: constants.FETCH_ONE_PLATE_SUCCESS,
  payload: plate
});

const fetchOnePlateFailed = (err) => ({
  type: constants.FETCH_ONE_PLATE_FAILED,
  payload: err
});

const addOnePlatePending = () => ({
  type: constants.ADD_ONE_PLATE_PENDING
});

const addOnePlateSuccess = (newPlate) => ({
  type: constants.ADD_ONE_PLATE_SUCCESS,
  payload: newPlate
});

const addOnePlateFailed = (err) => ({
  type: constants.ADD_ONE_PLATE_FAILED,
  payload: err
});

const updateOnePlatePending = () => ({
  type: constants.UPDATE_ONE_PLATE_PENDING
});

const updateOnePlateSuccess = (updatedPlate) => ({
  type: constants.UPDATE_ONE_PLATE_SUCCESS,
  payload: updatedPlate
});

const updateOnePlateFailed = (err) => ({
  type: constants.UPDATE_ONE_PLATE_FAILED,
  payload: err
});

const deleteOnePlatePending = () => ({
  type: constants.DELETE_ONE_PLATE_PENDING
});

const deleteOnePlateSuccess = (deletedPlate) => ({
  type: constants.DELETE_ONE_PLATE_SUCCESS,
  payload: deletedPlate
});

const deleteOnePlateFailed = (err) => ({
  type: constants.DELETE_ONE_PLATE_FAILED,
  payload: err
});

const deletePlatesFailed = (err) => ({
  type: constants.DELETE_PLATES_FAILED,
  payload: err
});

const deletePlatesPending = () => ({
  type: constants.DELETE_PLATES_PENDING
});

const deletePlatesSuccess = (deletedPlates) => ({
  type: constants.DELETE_PLATES_SUCCESS,
  payload: deletedPlates
});



export {
  fetchAllPlatesPending,
  fetchAllPlatesSuccess,
  fetchAllPlatesFailed,
  fetchOnePlatePending,
  fetchOnePlateSuccess,
  fetchOnePlateFailed,
  addOnePlatePending,
  addOnePlateSuccess,
  addOnePlateFailed,
  updateOnePlatePending,
  updateOnePlateSuccess,
  updateOnePlateFailed,
  deleteOnePlatePending,
  deleteOnePlateSuccess,
  deleteOnePlateFailed,
  deletePlatesPending,
  deletePlatesSuccess,
  deletePlatesFailed
}