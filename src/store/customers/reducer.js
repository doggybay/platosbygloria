import * as constants from './constants';

let initialState = {
  all: [],
  one: {},
  err: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_CUSTOMERS_PENDING:
    case constants.FETCH_ONE_CUSTOMER_PENDING:
    case constants.ADD_ONE_CUSTOMER_PENDING:
    case constants.UPDATE_ONE_CUSTOMER_PENDING:
    case constants.DELETE_ONE_CUSTOMER_PENDING:  
      return state;

    case constants.FETCH_ALL_CUSTOMERS_FAILED:
    case constants.FETCH_ONE_CUSTOMER_FAILED:
    case constants.ADD_ONE_CUSTOMER_FAILED:
    case constants.UPDATE_ONE_CUSTOMER_FAILED:
    case constants.DELETE_ONE_CUSTOMER_FAILED:        
      return { ...state, err: action.payload };

    case constants.FETCH_ALL_CUSTOMERS_SUCCESS:
      return { ...state, all: action.payload };

    case constants.FETCH_ONE_CUSTOMER_SUCCESS:
      return { ...state, one: action.payload };

    case constants.ADD_ONE_CUSTOMER_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case constants.UPDATE_ONE_CUSTOMER_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((newCustomers, customer) => {
          if (!newCustomers.includes(customer.id)) {
            if (customer.id === action.payload.id) {
              newCustomers.push(action.payload);
            } else {
              newCustomers.push(customer);
            }
          };
          
          return newCustomers; 
        }, [])
      };

    case constants.DELETE_ONE_CUSTOMER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(customer => customer.id !== action.payload.id)
      };  

    default:
      return state;
  };
};

export default reducer;