
// initial state in redux will be empty
const initialState = {
  availableFeed: [],
};

const feedReducer = (state = initialState, action) => {
  if (action.type == "GET_Feed_2") {
      // addding data 
    return {
      ...state,
      availableFeed: state.availableFeed.concat(action.payload),
    };
  }
  if (action.type == "GET_Feed") {
    return {
      ...state,
      availableFeed: action.payload,
    };
  }
  return state;
};
export default feedReducer;
