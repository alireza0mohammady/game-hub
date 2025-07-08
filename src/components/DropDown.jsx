import { useState } from "react";

const DropDown = (props) => {
  const { placeHolder, options, selectedOption, setOption } = props;
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <p
          onClick={() => {
            setShow(!show);
          }}
        >
          {selectedOption ? selectedOption.name : placeHolder}
        </p>
        <div className="relative">
          <div
            className={
              show ? "absolute bg-dark-secondery rounded-lg" : "hidden"
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
