import axios from 'axios';
import * as actions from './actions';

const BASE_URL = process.env.REACT_APP_baseApiUrl

const fetchAllCustomers = () => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.fetchAllCustomersPending());

      const res = await axios.get(`${BASE_URL}/customers`);

      
      
      dispatch(actions.fetchAllCustomersSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.fetchAllCustomersFailed(err));
    }
  };
};

const fetchOneCustomer = (id) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.fetchOneCustomerPending());

      const res = await axios.get(`${BASE_URL}/customers/${id}`);
      
      dispatch(actions.fetchOneCustomerSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.fetchOneCustomerFailed(err));
    }
  };
};

const addOneCustomer = (newCustomer) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.addOneCustomerPending());

      const res = await axios.post(`${BASE_URL}/customers`, newCustomer);

      dispatch(actions.addOneCustomerSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.addOneCustomerFailed(err));
    }
  };
};

const updateOneCustomer = (id, updatedCustomer) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.updateOneCustomerPending());

      const res = await axios.patch(`${BASE_URL}/customers/${id}`, updatedCustomer);
      
      dispatch(actions.updateOneCustomerSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.updateOneCustomerFailed(err));
    }
  };
};

const deleteOneCustomer = (id) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.deleteOneCustomerPending());

      const res = await axios.delete(`${BASE_URL}/customers/${id}`);
      
      dispatch(actions.deleteOneCustomerSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.deleteOneCustomerFailed(err));
    }
  };
};

const deleteCustomers = (ids) => {
  return async (dispatch) => {
    
    try {
      dispatch(actions.deleteCustomersPending());

      const formattedIds = { data: ids }

      const res = await axios.delete(`${BASE_URL}/customers`, formattedIds);
      
      dispatch(actions.deleteCustomersSuccess(res.data));
      
    } catch (err) {
      dispatch(actions.deleteCustomersFailed(err));
    }
  };
};

export {
  fetchAllCustomers,
  fetchOneCustomer,
  addOneCustomer,
  updateOneCustomer,
  deleteOneCustomer,
  deleteCustomers
}