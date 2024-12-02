import React, { useContext } from "react";
import { dashBoardContext } from "../App.jsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";
import { links } from "../data/dummy.jsx";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(
    dashBoardContext
  );
  return (
    <>
      {sidebar && (
        <div className="w-[350px] h-[100vh] border p-3 sidebar fixed top-0 left-0 bg-white">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <span className="flex p-2 gap-2 text-2xl items-center">
                <SiShopware /> Shoppy
              </span>
            </Link>
            <button
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="hover:bg-gray-200 text-2xl p-2 rounded-full"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          {links.map((item) => {
            return (
              <div>
                <h1 className="text-xl font-semibold">
                  {item.title}
                </h1>
                <ul className="flex-col gap-1">
                  {item.links.map((link) => {
                    return (
                      <li className="bg-gray-100 p-3 m-2 capitalize text-md flex justify-between items-center rounded-lg hover:bg-gray-200">
                        <Link
                          to={
                            link.name ==
                            "ecommerce"
                              ? "/"
                              : `/${link.name}`
                          }
                        >
                          {link.name}
                        </Link>
                       <span className="text-xl"> {link.icon}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sidebar;
