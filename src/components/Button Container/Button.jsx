import React from "react";

const Button = ({ id, handleClick, children, title, className, testId }) => {
  return (
    <button
      className={className}
      id={id}
      onClick={handleClick}
      title={title}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

export default Button;
