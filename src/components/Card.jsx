import { SiIos } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa6";
import getCropedImageUrl from "../services/img-url";
import CardEmoji from "./Main/CardEmoji";

const Card = (props) => {
  const { name, img, platforms, meta, rating_top } = props;

  const platformsLogos = platforms.map((item) => {
    if (item.platform.slug == "pc") return <FaWindows key={item.platform.id} />;
    if (item.platform.slug == "playstation")
      return <FaPlaystation key={item.platform.id} />;
    if (item.platform.slug == "xbox") return <FaXbox key={item.platform.id} />;
    if (item.platform.slug == "linux")
      return <FaLinux key={item.platform.id} />;
    if (item.platform.slug == "nintendo")
      return <BsNintendoSwitch key={item.platform.id} />;
    if (item.platform.slug == "ios") return <SiIos key={item.platform.id} />;
    if (item.platform.slug == "mac") return <FaApple key={item.platform.id} />;
    if (item.platform.slug == "android")
      return <FaAndroid key={item.platform.id} />;
  });

  function metaColor() {
    if (!meta) return "hidden";
    if (meta >= 80) return "text-green-500 border-green-500/40";
    if (meta >= 60) return "text-yellow-500 border-yellow-500/40";
    return "text-red-500 border-red-500/40";
  }

  return (
    <div>
      <section className="dark:bg-dark-secondery shadow-md rounded-xl overflow-hidden flex flex-col gap-3 dark:text-gray-50">
        <section>
          <img
            src={img ? getCropedImageUrl(img) : null}
            alt=""
            className="w-full"
          />
        </section>
        <section className="p-4 flex flex-col gap-1">
          <div className="flex justify-between items-center gap-2">
            <div className="flex gap-1">{platformsLogos}</div>
            <div className={metaColor() + " px-1.5 rounded-sm border"}>
              {meta}
            </div>
          </div>
          <div className="font-bold text-2xl">{name}</div>
          <CardEmoji rating_top={rating_top} />
        </section>
      </section>
    </div>
  );
};

export default Card;
