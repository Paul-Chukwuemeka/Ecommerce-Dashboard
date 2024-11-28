import React, { useContext } from "react";
import { dashBoardContext } from "../App.jsx";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(
    dashBoardContext
  );
  return (
    <>
      { sidebar &&
        <div className="w-[350px] h-[100vh] border p-3 sidebar fixed top-0 left-0 bg-white">
          <button
            onClick={() => {
              setSidebar((prev) => !prev);
            }}
            className="hover:bg-gray-200 text-2xl p-2 rounded-full"
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>
      }
    </>
  );
};

export default Sidebar;
