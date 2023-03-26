import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import RegionViewApi from "../views/RegionViewApi";
import CountriesViewApi from "../views/CountriesViewApi";
import DepartmentViewApi from "../views/DepartmentViewApi";
import EmployeesViewApi from "../views/EmployeesViewApi";
import JobsViewApi from "../views/JobsViewApi";
import LocationsViewApi from "../views/LocationsViewApi";
import Dashboard from "../pages/Dashboard";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "region",
          element: <RegionViewApi />,
        },
        {
          path: "countrie",
          element: <CountriesViewApi />,
        },
        {
          path: "department",
          element: <DepartmentViewApi />,
        },
        {
          path: "employee",
          element: <EmployeesViewApi />,
        },
        {
          path: "jobs",
          element: <JobsViewApi />,
        },
        {
          path: "location",
          element: <LocationsViewApi />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="404 Page Not Found" replace />,
    },
  ]);
}
