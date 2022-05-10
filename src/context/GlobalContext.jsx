import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ENABLE_FORM":
      return { ...state, disableInput: false };
    case "DISABLE_FORM":
      return { ...state, disableInput: true };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    disableInput: true,
  });
  console.log(state);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
