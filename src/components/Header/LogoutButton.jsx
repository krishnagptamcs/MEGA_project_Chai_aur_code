import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { setLogout } from "../../slices/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(setLogout());
    });
  };

  return <button className="px-6 py-2 bg-red-500">Logout</button>;
};

export default LogoutButton;
