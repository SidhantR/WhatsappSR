// import React, {createContext,useContext,useReducer} from "react"

// export const StateContext =createContext();
// // it is where data layer actually lives

// export const StateProvider =({reducer,initialState,children})=>(
//     <StateContext.Provider value ={ useReducer (reducer,initialState)}>
//         {children}
//     </StateContext.Provider>
// ); // it is a higher order function 

// export const useStateValue = () => useContext(StateContext)
// // allow us to pull information from data layer




import React, {createContext,useContext,useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);