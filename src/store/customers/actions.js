import * as constants from './constants';

const fetchAllCustomersPending = () => ({
  type: constants.FETCH_ALL_CUSTOMERS_PENDING
});

const fetchAllCustomersSuccess = (customers) => ({
  type: constants.FETCH_ALL_CUSTOMERS_SUCCESS,
  payload: customers
})

const fetchAllCustomersFailed = (err) => ({
  type: constants.FETCH_ALL_CUSTOMERS_FAILED,
  payload: err
}) 

const fetchOneCustomerPending = () => ({
  type: constants.FETCH_ONE_CUSTOMER_PENDING
});

const fetchOneCustomerSuccess = (customer) => ({
  type: constants.FETCH_ONE_CUSTOMER_SUCCESS,
  payload: customer
});

const fetchOneCustomerFailed = (err) => ({
  type: constants.FETCH_ONE_CUSTOMER_FAILED,
  payload: err
});

const addOneCustomerPending = () => ({
  type: constants.ADD_ONE_CUSTOMER_PENDING
});

const addOneCustomerSuccess = (newCustomer) => ({
  type: constants.ADD_ONE_CUSTOMER_SUCCESS,
  payload: newCustomer
});

const addOneCustomerFailed = (err) => ({
  type: constants.ADD_ONE_CUSTOMER_FAILED,
  payload: err
});

const updateOneCustomerPending = () => ({
  type: constants.UPDATE_ONE_CUSTOMER_PENDING
});

const updateOneCustomerSuccess = (updatedCustomer) => ({
  type: constants.UPDATE_ONE_CUSTOMER_SUCCESS,
  payload: updatedCustomer
});

const updateOneCustomerFailed = (err) => ({
  type: constants.UPDATE_ONE_CUSTOMER_FAILED,
  payload: err
});

const deleteOneCustomerPending = () => ({
  type: constants.DELETE_ONE_CUSTOMER_PENDING
});

const deleteOneCustomerSuccess = (deletedCustomer) => ({
  type: constants.DELETE_ONE_CUSTOMER_SUCCESS,
  payload: deletedCustomer
});

const deleteOneCustomerFailed = (err) => ({
  type: constants.DELETE_ONE_CUSTOMER_FAILED,
  payload: err
});

const deleteCustomersPending = () => ({
  type: constants.DELETE_CUSTOMERS_PENDING
});

const deleteCustomersSuccess = (deletedCustomers) => ({
  type: constants.DELETE_CUSTOMERS_SUCCESS,
  payload: deletedCustomers
});

const deleteCustomersFailed = (err) => ({
  type: constants.DELETE_CUSTOMERS_FAILED,
  payload: err
});

export {
  fetchAllCustomersPending,
  fetchAllCustomersSuccess,
  fetchAllCustomersFailed,
  fetchOneCustomerPending,
  fetchOneCustomerSuccess,
  fetchOneCustomerFailed,
  addOneCustomerPending,
  addOneCustomerSuccess,
  addOneCustomerFailed,
  updateOneCustomerPending,
  updateOneCustomerSuccess,
  updateOneCustomerFailed,
  deleteOneCustomerPending,
  deleteOneCustomerSuccess,
  deleteOneCustomerFailed,
  deleteCustomersPending,
  deleteCustomersSuccess,
  deleteCustomersFailed
}