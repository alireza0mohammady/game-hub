import Aside from "./components/Aside/Aside";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [gameQuery, setGameQuery] = useState({
    genres: null,
    ordering: null,
    platforms: null,
    search: null,
  });
  function setSelectedGenre(genre) {
    setGameQuery({ ...gameQuery, genres: genre });
  }
  function setSelectedPlatform(selectedPlatform) {
    setGameQuery({ ...gameQuery, platforms: selectedPlatform });
  }
  function setSortingMethod(method) {
    setGameQuery({ ...gameQuery, ordering: method });
  }
  function setSearch(name) {
    setGameQuery({ ...gameQuery, search: name });
  }
  return (
    <>
      <NavBar gameQuery={gameQuery} setSearch={setSearch}></NavBar>
      <section className="flex flex-col md:flex-row">
        <Aside
          gameQuery={gameQuery}
          setSelectedGenre={setSelectedGenre}
        ></Aside>
        <Main
          gameQuery={gameQuery}
          setSelectedPlatform={setSelectedPlatform}
          setSortingMethod={setSortingMethod}
        ></Main>
      </section>
    </>
  );
}

export default App;
