import meh from "../../assets/meh.webp";
import bullseye from "../../assets/bulls-eye.webp";
import thumsUp from "../../assets/thumbs-up.webp";

const CardEmoji = (props) => {
  const { rating_top } = props;
  function emojiSelector() {
    if (rating_top < 3) return;
    if (rating_top == 3) return { src: meh, alt: "meh", classes: "w-8 h-8" };
    if (rating_top == 4)
      return { src: thumsUp, alt: "thumsUp", classes: "w-6 h-6" };
    if (rating_top == 5)
      return { src: bullseye, alt: "bullseye", classes: "w-8 h-8" };
  }
  const emoji = emojiSelector();
  return (
    <>
      {emoji ? (
        <img src={emoji.src} alt={emoji.alt} className={emoji.classes} />
      ) : (
        ""
      )}
    </>
  );
};

export default CardEmoji;
