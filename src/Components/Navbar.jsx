import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { path: "", label: "Home" },
    { path: "/apps", label: "Apps" },
    { path: "/installation", label: "Installation" },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link) => (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-purple-800 border-b-3"
                        : "text-lg font-semibold"
                    }
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img className="size-10" src={logo} alt="hero" />
            <span className="font-bold hidden sm:block bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-purple-800 border-b-3"
                      : "text-lg font-semibold"
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            target="_blank"
            to="https://github.com/imtiaz-al-kabir"
            className="btn bg-gradient-to-r from-[#632ee3] text-xl to-[#9f62f2] text-white"
          >
            <FaGithub />
            <span>Contribute</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
