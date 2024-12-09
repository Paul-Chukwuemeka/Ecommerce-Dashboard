import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
} from "./pages/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>        <Navbar />
        <Sidebar /><Ecommerce /></>,
  },
  {
    path: "/orders",
    element:  <>       <Navbar />
        <Sidebar /><Orders /></>
  },
  {
    path: "/employees",
    element:       <>  <Navbar />
        <Sidebar /><Employees /></>
  },
  {
    path: "/customers",
    element:        <> <Navbar />
        <Sidebar /><Customers /></>,
  },
  {
    path: "/kanban",
    element: <><Navbar />
        <Sidebar /><Kanban /></>,
  },
  {
    path: "/editor",
    element:  <><Navbar />
        <Sidebar /><Editor /></>       ,
  },
  {
    path: "/calendar",
    element:   <><Navbar />
        <Sidebar /><Calendar /></>,
  },
  {
    path: "/color-picker",
    element:  <><Navbar />
        <Sidebar /><ColorPicker /></>
  },
  {
    path: "/line",
    element:     <> <Navbar />
        <Sidebar /><Line /></>   
  },
  {
    path: "/area",
    element:   <> <Navbar />
        <Sidebar /><Area /></>
  },
  {
    path: "/bar",
    element:    <><Navbar />
        <Sidebar /><Bar /></>,
  },
  {
    path: "/Pie",
    element:    <><Navbar />
        <Sidebar /><Pie /></>,
  },
  {
    path: "/financial",
    element:   <><Navbar />
        <Sidebar /><Financial /></>,
  },
  {
    path: "/color-mapping",
    element:   <> <Navbar />
        <Sidebar /><ColorMapping /></>,
  },
  {
    path: "/pyramid",
    element:   <><Navbar />
        <Sidebar /><Pyramid /></>,
  },
  {
    path: "/stacked",
    element: <>
       <Navbar />
       <Sidebar /><Stacked /></>
  },
]);
const Router = () => {
  return (
  <RouterProvider router={router} />
)
};

export default Router;
