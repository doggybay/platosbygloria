import axios from 'axios';
import * as actions from './actions';

const BASE_URL = process.env.REACT_APP_baseApiUrl

const fetchAllPlates = () => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.fetchAllPlatesPending());

      const res = await axios.get(`${BASE_URL}/plates`);
      
      dispatch(actions.fetchAllPlatesSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.fetchAllPlatesFailed(err));
    }
  };
};

const fetchOnePlate = (id) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.fetchOnePlatePending());

      const res = await axios.get(`${BASE_URL}/plates/${id}`);
      
      dispatch(actions.fetchOnePlateSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.fetchOnePlateFailed(err));
    }
  };
};

const addOnePlate = (newPlate) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.addOnePlatePending());

      const res = await axios.post(`${BASE_URL}/plates`, newPlate);
      
      dispatch(actions.addOnePlateSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.addOnePlateFailed(err));
    }
  };
};

const updateOnePlate = (id, updatedPlate) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.updateOnePlatePending());

      const res = await axios.patch(`${BASE_URL}/plates/${id}`, updatedPlate);
      
      dispatch(actions.updateOnePlateSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.updateOnePlateFailed(err));
    }
  };
};

const deleteOnePlate = (id) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.deleteOnePlatePending());

      const res = await axios.delete(`${BASE_URL}/plates/${id}`);
      
      dispatch(actions.deleteOnePlateSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.deleteOnePlateFailed(err));
    }
  };
};

export {
  fetchAllPlates,
  fetchOnePlate,
  addOnePlate,
  updateOnePlate,
  deleteOnePlate
}