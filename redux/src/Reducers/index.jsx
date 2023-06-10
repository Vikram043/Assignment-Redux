const initialState = {
    value: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          value: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  