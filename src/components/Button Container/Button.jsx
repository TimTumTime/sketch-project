import React from "react";

const Button = ({ id, handleClick, children, title }) => {
  return (
    <button className="button" id={id} onClick={handleClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
