import { useEffect, useState } from "react";
import gameApi from "../../services/games-api";
import GridSection from "./GridSection";
import GamesGridSkeleton from "./GamesGridSkeleton";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const Main = (props) => {
  const { selectedGenre } = props;
  const [selectedSortMethod, setSelectedSortMethod] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gridCols, setGridCols] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

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

  useEffect(() => {
    setLoading(true);
    console.log(selectedSortMethod);
    const { request, cancel } = gameApi.get({
      ...(selectedSortMethod ? { ordering: selectedSortMethod.id } : {}),
      ...(selectedGenre ? { genres: selectedGenre } : {}),
      ...(selectedPlatform
        ? { parent_platforms: selectedPlatform.id.toString() }
        : {}),
    });
    request
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setResult(res.data.results);
      })
      .catch((error) => {
        setLoading(false);
        if (error.name === "CanceledError") return;
        setError(error);
      });
    return () => {
      cancel();
    };
  }, [selectedGenre, selectedPlatform, selectedSortMethod]);

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
    <main className="lg:w-6/7 ">
      <section>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
        <SortSelector
          selectedSortMethod={selectedSortMethod}
          setSelectedSortMethod={setSelectedSortMethod}
        />
      </section>
      <section
        className={
          mainDynamicGridClass() +
          " grid gap-x-2.5 md:gap-x-5 px-2.5 py-2.5 items-start"
        }
      >
        {error ? error.message : ""}
        {result && !loading ? (
          <GridSection result={result} gridCols={gridCols} />
        ) : (
          <GamesGridSkeleton />
        )}
      </section>
    </main>
  );
};

export default Main;
