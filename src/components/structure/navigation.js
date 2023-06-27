import { Dashboard } from "../pages/Dashboard"
import { Account } from "../pages/Account"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Assignment } from "../pages/Assignment"

export const nav = [
     { path:     "/",             name: "Home",        element: <Home />,           isMenu: true,     isPrivate: false  },
     { path:     "/login",        name: "Login",       element: <Login />,          isMenu: false,    isPrivate: false  },
     { path:     "/dashboard",    name: "Dashboard",   element: <Dashboard />,      isMenu: true,     isPrivate: true  },
     { path:     "/assignment",   name: "Assignment",  element: <Assignment />,     isMenu: true,     isPrivate: true  },
     { path:     "/account",      name: "Account",     element: <Account />,        isMenu: true,     isPrivate: true  },
]