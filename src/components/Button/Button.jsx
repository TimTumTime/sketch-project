import React from "react";

const Button = ({ id, handleClick, children, title, className, testId }) => {
  const test = (e) => {
    console.log("Button clicked");
  };
  return (
    <button
      className={className}
      id={id}
      onClick={handleClick ? handleClick : test}
      title={title}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

export default Button;
