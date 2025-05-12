import { IoSearch } from "react-icons/io5";
import logo from "../../assets/comi-cog.png";
import DarkModeButton from "./DarkModeButton";

const NavBar = () => {
  return (
    <nav className="flex gap-6 items-center px-4 py-4">
      <section className="min-w-8">
        <img src={logo} alt="" className="w-8 lg:w-11" />
      </section>
      <section className="flex items-center justify-start gap-0.5 bg-gray-50 px-4 py-1 lg:py-2 grow rounded-full text-gray-700">
        <IoSearch className="text-lg" />
        <input
          type="text"
          className=" focus:outline-0 lg:text-lg lg:ml-2 focus:border-0 placeholder:text-gray-500 caret-gray-500 w-5/6"
          placeholder="search game name"
        />
      </section>
      <section className="">
        <DarkModeButton />
      </section>
    </nav>
  );
};

export default NavBar;
