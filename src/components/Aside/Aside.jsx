import getCropedImageUrl from "../../services/img-url";
import useGenreQuery from "../../services/useGenreQuery";

const Aside = (props) => {
  const { gameQuery, setSelectedGenre } = props;

  const { data, error } = useGenreQuery();

  function handleSelectedGenre(genre) {
    if (genre) setSelectedGenre(genre);
  }

  return (
    <section className="flex flex-col items-center lg:w-1/6">
      <h4 className="text-2xl font-semibold mb-5">header</h4>
      <div className="flex flex-col gap-3 pl-10">
        {error ? "error" : <></>}
        {data ? (
          data.map((i) => {
            return (
              <div
                key={i.id}
                className={"flex items-center gap-2"}
                onClick={() => {
                  handleSelectedGenre(i);
                }}
              >
                <img
                  src={getCropedImageUrl(i.image_background)}
                  alt=""
                  className="max-w-10 aspect-square object-cover rounded-lg"
                />
                <h4 className="text-lg font-medium">{i.name}</h4>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Aside;
