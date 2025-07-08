import { useEffect } from "react";
import genreApi from "../../services/genre-api";
import { useState } from "react";
import getCropedImageUrl from "../../services/img-url";

const Aside = (props) => {
  const { setSelectedGenre, selectedGenre } = props;
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const { request, cancel } = genreApi.get();

    request
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      cancel();
    };
  }, []);

  function handleSelectedGenre(genre) {
    if (genre) setSelectedGenre(genre);
  }

  return (
    <section className="flex flex-col items-center lg:w-1/7">
      <h4 className="text-2xl font-semibold">header</h4>
      <div className="flex flex-col gap-3 pl-10">
        {genres.map((i) => {
          return (
            <div
              key={i.id}
              className={"flex items-center gap-2 "}
              onClick={() => {
                handleSelectedGenre(i.id);
              }}
            >
              <img
                src={getCropedImageUrl(i.image_background)}
                alt=""
                className="max-w-12 aspect-square object-cover rounded-lg"
              />
              <h4 className="text-lg font-medium">{i.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Aside;
