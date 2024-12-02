import React, {
  useState,
  useContext,
  createContext,
} from "react";

import Router from "./dashboard.router";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Footer,
  ThemeSettings,
  Sidebar,
  Navbar,
} from "./components";

export const dashBoardContext =
  React.createContext();

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <dashBoardContext.Provider
        value={{
          sidebar,
          setSidebar,
        }}
      >
        <Router />
        <div className="z-[1000] fixed right-4 bottom-4">
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button className="text-2xl text-white cursor-pointer bg-blue-900 p-3 rounded-full hover:bg-blue-500 hover:text-black">
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </dashBoardContext.Provider>
    </>
  );
}

export default App;
