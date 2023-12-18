import React from "react";

function Button(props) {
  return (
    <div>
      <button className="bg-secondaryColor text-sm font-bold font-inter text-white py-2 px-5 rounded-[4px] uppercase">{props.btnText}</button>
    </div>
  );
}

export default Button;
