import * as constants from './constants';

let initialState = {
  all: [],
  one: {},
  err: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_PLATES_PENDING:
    case constants.FETCH_ONE_PLATE_PENDING:
    case constants.ADD_ONE_PLATE_PENDING:
    case constants.UPDATE_ONE_PLATE_PENDING:
    case constants.DELETE_ONE_PLATE_PENDING:
    case constants.DELETE_PLATES_PENDING:    
      return state;

    case constants.FETCH_ALL_PLATES_FAILED:
    case constants.FETCH_ONE_PLATE_FAILED:
    case constants.ADD_ONE_PLATE_FAILED:
    case constants.UPDATE_ONE_PLATE_FAILED:
    case constants.DELETE_ONE_PLATE_FAILED:
    case constants.DELETE_PLATES_FAILED:        
      return { ...state, err: action.payload };

    case constants.FETCH_ALL_PLATES_SUCCESS:
      return { ...state, all: action.payload };

    case constants.FETCH_ONE_PLATE_SUCCESS:
      return { ...state, one: action.payload };

    case constants.ADD_ONE_PLATE_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case constants.UPDATE_ONE_PLATE_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((newPlates, plate) => {
          if (!newPlates.includes(plate.id)) {
            if (plate.id === action.payload.id) {
              newPlates.push(action.payload);
            } else {
              newPlates.push(plate);
            }
          };

          return newPlates; 
        }, [])
      };

    case constants.DELETE_ONE_PLATE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(plate => plate.id !== action.payload.id)
      };

    case constants.DELETE_PLATES_SUCCESS:
      return {
        ...state,
        all: state.all.filter((plate, i) => {
          if (action.payload.length === 1) {
            return (plate.id !== action.payload[0].id)

          } else {
            return (plate.id !== action.payload[i].id)
          }
        })
      }; 

    default:
      return state;
  };
};

export default reducer;