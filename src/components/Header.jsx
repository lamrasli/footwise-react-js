import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { RiContactsFill, RiMenuFill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" w-screen h-[80px] z-10 fixed bg-[var(--secondary-clr)] drop-shadow-lg">
      <div className="px-7 flex justify-between items-center w-full h-full md:px-14 2xl:px-28">
        <div className="flex items-center w-full">
          <img src="/assets/logo.png" alt="" className=" w-12 md:w-14" />
          <Link to="/" className="text-xl font-bold md:text-2xl">
            Foot
            <span className="font-bold text-[color:var(--primary-clr)]">
              Wise
            </span>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-7">
            <li className="flex items-center gap-2">
              <AiFillHome
                size={17}
                className="text-[color:var(--primary-clr)]"
              />
              <Link
                to="/"
                className="hover:text-[color:var(--primary-clr)] duration-700"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <GiRunningShoe
                size={20}
                className="text-[color:var(--primary-clr)]"
              />
              <Link
                to="/Products"
                className="hover:text-[color:var(--primary-clr)] duration-700"
              >
                Products
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MdAttachMoney
                size={20}
                className="text-[color:var(--primary-clr)]"
              />
              <Link
                to="/Pricing"
                className="hover:text-[color:var(--primary-clr)] duration-700"
              >
                Pricing
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <RiContactsFill
                size={17}
                className="text-[color:var(--primary-clr)]"
              />
              <Link
                to="/Contact"
                className="hover:text-[color:var(--primary-clr)] duration-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* mobile Menu */}
        <div onClick={() => setNav(!nav)}>
          <RiMenuFill
            size={30}
            className="block md:hidden absolute right-6 top-6 cursor-pointer"
          />
        </div>
        {/* disable scrolling when navMenu open  */}
        {nav
          ? document.body.classList.add("overflow-hidden")
          : document.body.classList.remove("overflow-hidden")}
        {/* overlay */}
        {nav ? (
          <div className="bg-black/50 w-full fixed h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* Side Menu */}
        <div
          className={
            nav
              ? "fixed top-0 right-0 w-[300px] z-10 h-screen bg-[var(--secondary-clr)] duration-300"
              : "fixed top-0 right-[-100%] w-[300px] z-10 h-screen bg-[var(--secondary-clr)] duration-300"
          }
        >
          <div onClick={() => setNav(!nav)}>
            <RiCloseFill size={35} className="m-3 cursor-pointer" />
          </div>
          <div className="grid grid-rows-3 nav-m-content ">
            <div className="flex items-center justify-center ">
              <img src="/assets/logo.png" alt="" className=" w-12 md:w-14" />
              <Link to="/" className="text-xl font-bold md:text-2xl">
                Foot
                <span className="font-bold text-[color:var(--primary-clr)]">
                  Wise
                </span>
              </Link>
            </div>
            <nav>
              <ul className="flex flex-col items-center gap-7">
                <li className="flex items-center gap-2">
                  <AiFillHome
                    size={25}
                    className="text-[color:var(--primary-clr)]"
                  />
                  <Link
                    to="/"
                    className="hover:text-[color:var(--primary-clr)] text-xl duration-700"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GiRunningShoe
                    size={28}
                    className="text-[color:var(--primary-clr)]"
                  />
                  <Link
                    to="/Products"
                    className="hover:text-[color:var(--primary-clr)] text-xl duration-700"
                  >
                    Products
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <MdAttachMoney
                    size={30}
                    className="text-[color:var(--primary-clr)]"
                  />
                  <Link
                    to="/Pricing"
                    className="hover:text-[color:var(--primary-clr)] text-xl duration-700"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <RiContactsFill
                    size={25}
                    className="text-[color:var(--primary-clr)]"
                  />
                  <Link
                    to="/Contact"
                    className="hover:text-[color:var(--primary-clr)] text-xl duration-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <p className=" text-center font-light place-self-end   px-3">
              &copy; 2023 FootWise. All rights reserved | Coded and designed by
              <a
                href="https://lamraslibadr.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
      border-b"
              > Badr Lamrasli
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
