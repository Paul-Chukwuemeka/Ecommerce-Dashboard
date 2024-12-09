import React, {
  useState,
  useContext,
  createContext,
} from "react";

import { DashboardProvider } from "./context/contextProvider";
import Router from "./dashboard.router";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

function App() {
  return (
    <>
      <DashboardProvider>
        <Router />
        <div className="z-[1000] fixed right-4 bottom-4">
          <TooltipComponent
            content="Settings"
            position="TopCenter"
          >
            <button className="text-2xl text-white cursor-pointer bg-blue-900 p-3 rounded-full hover:bg-blue-500 hover:text-black">
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </DashboardProvider>
    </>
  );
}

export default App;
