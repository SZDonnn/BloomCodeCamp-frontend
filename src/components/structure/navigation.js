import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Assignment } from "../pages/Assignment";
import { Register } from "../pages/Register";
import { AddAssignment } from "../pages/AddAssignment";

export const nav = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: <Dashboard />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/assignment",
    name: "Assignment",
    element: <Assignment />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/register",
    name: "Register",
    element: <Register />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/add-assignment",
    name: "Add Assignment",
    element: <AddAssignment />,
    isMenu: false,
    isPrivate: true,
  },
];
