import { useEffect, useState } from "react";
import gameApi from "../../services/games-api";
import GridSection from "./GridSection";

const Main = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const { request, cancel } = gameApi.getGames();
    request
      .then((res) => {
        setResult(res.data.results);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error);
      });
    return () => {
      cancel();
    };
  }, []);

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
    <main
      className={
        mainDynamicGridClass() +
        " grid gap-x-2.5 md:gap-x-5 lg:w-6/7 px-2.5 py-2.5 items-start"
      }
    >
      {error ? error.message : ""}
      {result ? <GridSection result={result} gridCols={gridCols} /> : "no data"}
    </main>
  );
};

export default Main;
