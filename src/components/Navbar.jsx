import React, { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { dashBoardContext } from "../App.jsx";
// import '../data/dummy.js'

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(
    dashBoardContext
  );
  return (
    <div className="p-3 flex sticky top-0 z-[1000] w-full">
      {!sidebar && (
        <button
          onClick={() => {
            setSidebar(true);
          }}
          className="text-2xl bg-slate-100 p-1 rounded-md"
        >
          <MdOutlineMenu />
        </button>
      )}
    </div>
  );
};

export default Navbar;
