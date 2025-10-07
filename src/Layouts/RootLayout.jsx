import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
     <div className="w-11/12 mx-auto flex flex-1">
         <Outlet />
     </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
