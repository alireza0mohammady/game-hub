import DropDown from "../DropDown";

const SortSelector = (props) => {
  const { selectedSortMethod, setSelectedSortMethod } = props;
  const sortMethods = [
    { name: "A-Z", id: "name" },
    { name: "release date", id: "-released" },
    { name: "rating", id: "-rating" },
    { name: "metacritic", id: "-metacritic" },
    { name: "created", id: "-created" },
  ];
  return (
    <>
      <DropDown
        placeHolder="sort by"
        options={sortMethods}
        selectedOption={selectedSortMethod}
        setOption={setSelectedSortMethod}
      ></DropDown>
    </>
  );
};

export default SortSelector;
