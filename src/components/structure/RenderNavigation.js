import { Link, Route, Routes } from "react-router-dom";
import { AuthData, AuthContext } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import React, { useContext } from "react";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const userAuthority = user?.authority;

  const MenuItem = ({ r }) => {
    return (
      <div className="menuItem">
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };
  return (
    <div className="menu">
      {nav.map((r, i) => {
        if (userAuthority === "ROLE_LEARNER") {
          if (r.path !== "/register") {
            if (!r.isPrivate && r.isMenu) {
              return <MenuItem key={i} r={r} />;
            } else if (user.isAuthenticated && r.isMenu) {
              return <MenuItem key={i} r={r} />;
            } else return false;
          }
        } else {
          if (!r.isPrivate && r.isMenu) {
            return <MenuItem key={i} r={r} />;
          } else if (user.isAuthenticated && r.isMenu) {
            return <MenuItem key={i} r={r} />;
          } else return false;
        }
      })}
    </div>
  );
};
