import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleClose = () => {
    setIsShowMenu(false);
  };
  return (
    <div className="bg-slate-200 top-0 fixed w-full px-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-base sm:text-xl italic">
          <span className="text-red-700">Surjith</span>
          <span>Estate</span>
        </h1>
        <form className="bg-slate-100 flex items-center rounded-lg p-2 ">
          <input
            type="text"
            className="bg-transparent w-32 sm:w-64 focus:outline-none"
            placeholder="Search..."
          />
          <IoSearch className="text-xl" />
        </form>
        <div className="text-3xl pl-24 cursor-pointer md:hidden visible">
          {!isShowMenu ? (
            <GiHamburgerMenu
              onClick={() => setIsShowMenu(true)}
              className="text-xl cursor-pointer"
            />
          ) : (
            <IoClose onClick={handleClose} />
          )}
        </div>

        <ul
          className={
            "md:static absolute top-16 py-8 px-5 md:p-0 w-[165px] space-y-16 md:space-y-0 font-medium bg-slate-100 md:bg-transparent md:flex md:gap-5 duration-200 ease-linear " +
            (isShowMenu ? " right-0" : "-right-48")
          }
        >
          <li onClick={handleClose}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleClose}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={handleClose}>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
