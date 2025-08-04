import Card from "../Card";
const GridColumn = (props) => {
  const { items } = props;
  return (
    <div className="flex flex-col gap-2.5 md:gap-5">
      {items.map((game) => {
        return (
          <Card
            key={game.id.toString()}
            name={game.name}
            platforms={game.parent_platforms}
            img={game.background_image}
            meta={game.metacritic}
            rating_top={game.rating_top}
          ></Card>
        );
      })}
    </div>
  );
};

export default GridColumn;
