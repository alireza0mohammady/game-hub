import logo from "../../assets/comi-cog.png";
import DarkModeButton from "./DarkModeButton";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex gap-6 items-center px-4 py-4">
      <section className="min-w-8">
        <img src={logo} alt="" className="w-8 lg:w-11" />
      </section>
      <SearchBar></SearchBar>
      <section className="">
        <DarkModeButton />
      </section>
    </nav>
  );
};

export default NavBar;
