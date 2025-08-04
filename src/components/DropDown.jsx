import { useState } from "react";
import { TbChevronDown } from "react-icons/tb";

const DropDown = (props) => {
  const { placeHolder, options, selectedOption, setOption } = props;
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="bg-white/10 rounded-lg px-4.5 py-1.5 font-semibold flex
          items-center gap-x-2 transition-all cursor-pointer"
        >
          <div>{selectedOption ? selectedOption.name : placeHolder}</div>
          <div>
            <TbChevronDown />
          </div>
        </div>
        <div className="relative">
          <div
            className={
              show ? "absolute bg-dark-secondery rounded-lg mt-2" : "hidden"
            }
          >
            {options.map((i) => {
              return (
                <p
                  className="px-4 py-2"
                  key={i.id}
                  onClick={() => {
                    setOption(i);
                    setShow(!show);
                  }}
                >
                  {i.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
