import React from "react";

const Button = ({ id, handleClick, children, title, className }) => {
  return (
    <button className={className} id={id} onClick={handleClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
