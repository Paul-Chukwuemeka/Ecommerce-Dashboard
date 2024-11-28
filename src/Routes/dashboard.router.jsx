import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ecommerce from "../components/ecommerce";

import {
  Orders,
  Employees,
  Customers,
  Kanban,
  Editor,
  Calender,
  ColorPicker,
  Charts,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked
} from "../components/index.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Ecommerce />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/kanban",
    element: <Kanban />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
  {
    path: "/calender",
    element: <Calender />,
  },
  {
    path: "/color-picker",
    element: <Color-picker />,
  },
  {
    path: "/charts",
    element: <Charts />,
  },
  {
    path: "/line",
    element: <Line />,
  },
  {
    path: "/area",
    element: <Area />,
  },
  {
    path: "/bar",
    element: <Bar />,
  },
  {
    path: "/Pie",
    element: <Pie />,
  },
  {
    path: "/financial",
    element: <Financial />,
  },
  {
    path:"/color-mapping",
    element:<Color-mapping/>
},
{
    path:"/pyramid",
    element:<Pyramid/>
},
{
    path:"/stacked",
    element:<Stacked/>
}
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
