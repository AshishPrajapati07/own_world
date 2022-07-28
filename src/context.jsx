import React, { useContext, useReducer } from "react";
import reducer from './reducer';

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Ashish Prajapati",
        image: "/hero.svg",
      },
    });
  };
  
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "fullStack Developer",
        image: "/fullstack.png",
      },
    });
  };
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
