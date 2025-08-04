import DropDown from "../DropDown";
import usePlatformsQuery from "../../services/usePlatformQuery";

const PlatformSelector = (props) => {
  const { selectedPlatform, setSelectedPlatform } = props;

  const { data, error } = usePlatformsQuery();

  return (
    <>
      {error ? "error" : ""}
      {data ? (
        <DropDown
          placeHolder="select platform"
          options={data}
          selectedOption={selectedPlatform}
          setOption={setSelectedPlatform}
        ></DropDown>
      ) : (
        ""
      )}
    </>
  );
};

export default PlatformSelector;
