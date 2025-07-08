import { useEffect } from "react";
import DropDown from "../DropDown";
import { useState } from "react";
import PlatformsApi from "../../services/platforms-api";
const PlatformSelector = (props) => {
  const { selectedPlatform, setSelectedPlatform } = props;
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    const { request, cancel } = PlatformsApi.get();
    request
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .then((error) => {
        console.log("error in platformSelector");
      });
    return () => {
      cancel();
    };
  }, []);

  return (
    <>
      <DropDown
        placeHolder="select platform"
        options={platforms}
        selectedOption={selectedPlatform}
        setOption={setSelectedPlatform}
      ></DropDown>
    </>
  );
};

export default PlatformSelector;
