import React, {
  useState,
  useContext,
  createContext,
} from "react";
import { useEffect } from "react";

const dashBoardContext = React.createContext();

const initialState = {
  cart: false,
  notification: false,
  chat: false,
  userProfile: false,
};

// useEffect(() => {
//   console.log(isClicked.cart);
// }, [isClicked]);

const DashboardProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isClicked, setIsClicked] =
    useState(initialState);

  const customFunc = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
    console.log(isClicked);
  };

  return (
    <dashBoardContext.Provider
      value={{
        sidebar,
        setSidebar,
        setIsClicked,
        isClicked,
        customFunc,
      }}
    >
      {children}
    </dashBoardContext.Provider>
  );
};

export { dashBoardContext, DashboardProvider };
