import React, { useContext } from "react";
import { dashBoardContext } from "../context/contextProvider.jsx";
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
        <div className="w-[350px] h-[100vh] border p-3 px-5 sidebar fixed top-0 left-0 bg-white">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <span className="flex p-2 gap-2 text-2xl font-bold items-center">
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
          <div className="mt-8">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <h1 className="text-md font-semibold text-[#000000c0]">
                    {item.title}
                  </h1>
                  <ul className="flex-col gap-1">
                    {item.links.map((link) => {
                      return (
                        <Link
                          to={
                            link.name ==
                            "ecommerce"
                              ? "/"
                              : `/${link.name}`
                          }
                          key={link.name}
                        >
                          <li className="bg-gray-100 p-3 m-2 capitalize text-md flex gap-2 items-center rounded-lg hover:bg-gray-200">
                            {link.icon}
                            {link.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
