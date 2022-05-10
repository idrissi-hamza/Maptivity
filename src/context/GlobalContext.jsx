import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case " MAP_CLICKED":
      return { ...state, mapClicked: true };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    mapClicked: false,
  });
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
