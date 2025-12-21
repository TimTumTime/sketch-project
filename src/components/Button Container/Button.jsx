import React from "react";

const Button = ({
  index,
  useCase,
  title,
  info,
  proficiency,
  topics,
  hours,
  handleClick,
}) => {
  return (
    <button className="button" value={useCase} onClick={handleClick}>
      <h3>{title}</h3>
      <p>{info}</p>
      {useCase.match("level") ? (
        <div>
          <h4>Topics Covered:</h4>
          <ul>
            {topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Proficiency: {proficiency}</p>
          <p>Estimated Hours: {hours}</p>
        </div>
      )}
    </button>
  );
};

export default Button;
