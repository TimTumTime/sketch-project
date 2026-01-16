import React from "react";
import { Canvas } from "../../components";
import { useParams } from "react-router-dom";
import { studyData } from "../../data";
const ExercisePage = () => {
  const { topic, exercise } = useParams();
  const data = studyData
    .find((item) => item.topic === topic)
    .exercises.find((item) => item.name === exercise);

  return (
    <section className="exercise-page">
      <span>
        <h3 className="exercise-title">{data.name}</h3>
        <h5 className="exercise-subtitle">{data.subtitle}</h5>
      </span>
      <Canvas />
    </section>
  );
};

export default ExercisePage;
