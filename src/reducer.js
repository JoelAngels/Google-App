//WHAT THE APP LOOKS LIKE WHEN IT LOADS
export const initialState = {
  term: null,
};

//Updating and dispatching the action to set the search term to our action type
export const actionTypes = {
  SET_SEARCH_TERM: " SET_SEARCH_TERM",
};
//reducer listens to any dispatcher action
export const reducer = (state, action) => {
  console.log(action); //debugging purposes

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state, //returns new state and new term
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
