import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const searchRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchRef.current.value);
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="flex items-center justify-start gap-0.5 bg-white/15 px-4 py-1 lg:py-2 grow rounded-full text-white/60 has-focuse:bg-red-200"
    >
      <IoSearch className="text-lg" />
      <input
        ref={searchRef}
        type="text"
        className="focus:outline-0 lg:text-lg lg:ml-2 focus:border-0 caret-gray-500 w-5/6"
        placeholder="search game name"
      />
    </form>
  );
};

export default SearchBar;
