import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
const RootLayout = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
