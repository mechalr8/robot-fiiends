import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid black",
        borderRadius: "3px",
        height: "560px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
