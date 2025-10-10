import { Link } from "react-router";
import bg from "../assets/bg.gif";

const ErrorPageApps = () => {
  return (
    <div className="py-10 bg-white font-[inter] overflow-hidden  flex items-center justify-center">
      <section className="w-full max-w-3xl text-center px-4">
        {/* Background with 404 text */}
        <div
          className="bg-center bg-no-repeat bg-contain h-[250px] sm:h-[350px] md:h-[450px] flex  justify-center "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="text-[40px] sm:text-[50px] md:text-[70px] font-serif font-bold text-gray-800 -my-10">
            Apps Not Found
          </h1>
        </div>

        {/* Content box */}
        <div className="mt-[-40px] sm:mt-[-60px]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gray-700">
            The Apps you are looking for is not Found
          </h3>

          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            The page you are looking for is not available!
          </p>

          <Link
            to="/"
            className=" btn btn-lg mt-6 px-6 py-2.5 bg-gradient-to-r from-[#632ee3] text-xl to-[#9f62f2] text-white"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPageApps;
