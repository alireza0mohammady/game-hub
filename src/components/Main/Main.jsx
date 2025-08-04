import { useEffect, useState } from "react";
import GridSection from "./GridSection";
import GamesGridSkeleton from "./GamesGridSkeleton";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import useGamesQuery from "../../services/useGamesQuery";

const Main = (props) => {
  const { gameQuery, setSelectedPlatform, setSortingMethod } = props;
  const [gridCols, setGridCols] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setGridCols(1);
      if (width >= 768) setGridCols(2);
      if (width >= 1024) setGridCols(3);
      if (width >= 1440) setGridCols(4);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data, error, isLoading, fetchNextPage } = useGamesQuery(gameQuery);

  function mainDynamicGridClass() {
    if (gridCols === 1) {
      return "grid-cols-1";
    }
    if (gridCols === 2) {
      return "grid-cols-2";
    }
    if (gridCols === 3) {
      return "grid-cols-3";
    }
    if (gridCols === 4) {
      return "grid-cols-4";
    }
  }

  return (
    <main className="lg:w-5/6 ">
      <section>
        <h2 className="text-3xl font-black">
          <span>
            {gameQuery.platforms ? gameQuery.platforms.name + " " : ""}
          </span>
          <span>{gameQuery.genres ? gameQuery.genres.name + " " : ""}</span>
          Games
        </h2>
        <section className="flex gap-3">
          <PlatformSelector
            selectedPlatform={gameQuery.platforms}
            setSelectedPlatform={setSelectedPlatform}
          />
          <SortSelector
            selectedSortMethod={gameQuery.ordering}
            setSelectedSortMethod={setSortingMethod}
          />
        </section>
      </section>
      <section
        className={
          mainDynamicGridClass() +
          " grid gap-x-2.5 md:gap-x-5 px-2.5 py-2.5 items-start"
        }
      >
        <button type="" onClick={fetchNextPage}></button>
        {error ? error.message : <></>}
        {isLoading ? <GamesGridSkeleton /> : <></>}
        {data ? <GridSection result={data} gridCols={gridCols} /> : <></>}
      </section>
    </main>
  );
};

export default Main;
