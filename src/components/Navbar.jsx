import React, { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dashBoardContext } from "../context/contextProvider.jsx";
import avatar from "../data/avatar.jpg";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Cart,
  Chat,
  UserProfile,
  Notification,
} from "../components/index.jsx";

const Navbar = () => {
  const {
    sidebar,
    setSidebar,
    isClicked,
    setIsClicked,
    customFunc,
  } = useContext(dashBoardContext);

  const NavButton = ({
    icon,
    title,
    color
  }) => (
    <TooltipComponent
      content={title}
      position="BottomCenter"
    >
      <button type="button" onClick={customFunc}>
        <span className="text-xl text-black h-2 w-2">
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );

  return (
    <div
      className={
        "p-2 flex border top-0 justify-between items-center w-full  "
      }
    >
      <button
        onClick={() => {
          setSidebar(true);
        }}
        className="text-2xl bg-slate-100 p-1 rounded-md"
      >
        <MdOutlineMenu />
      </button>
      <div className="flex items-end justify-around gap-3">
        <NavButton
          title="Cart"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content={"Profile"}>
          <div className="flex items-center gap-2">
            <img
              src={avatar}
              alt="Avatar image"
              className="h-8 w-8 rounded-full"
            />
            <p>
              <span className="font-normal text-[16px] text-gray-400">
                Hi ,
              </span>
              <span className="text-gray-400 text-[16px] font-bold">
                Sammy
              </span>
            </p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && (
          <Notification />
        )}
      </div>
    </div>
  );
};

export default Navbar;
