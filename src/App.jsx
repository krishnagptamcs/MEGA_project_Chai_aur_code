import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login } from "./slices/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        // calling getCurrentuser method from authService , if it is avliable then dispatch to login action and change states accordingly
        if (userData) {
          dispatch(login({ userData }));
        } else {
          // if no userdata found , run logout function once
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      }); // finally function run always ,  this is the last fucntion,
  }, []);
  // for environment variable in vite app we write as import.meta.env.

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet/> */}</main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <p>Please login first</p>
    </div>
  );
}

export default App;
