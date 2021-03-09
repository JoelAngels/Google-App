//importing the dependencies
import React, { createContext, useContext, useReducer } from "react";

//Preparing  the data layer
export const StateContext = createContext();
//higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/**The children that is referring too is the app */}
  </StateContext.Provider>
);

//Hook which allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);
//reducer function that determines changed to an application state.
