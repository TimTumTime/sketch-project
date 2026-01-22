import { useEffect, useState } from "react";
import { topicsData, levelsData } from "../../data";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const StructuredLearningPage = () => {
  const [levels, setLevels] = useState(levelsData);
  const [topics, setTopics] = useState(topicsData);

  const {
    learningView: learningView,
    setLearningView: setLearningView,
    proficiency: proficiency,
    setProficiency: setProficiency,
  } = useGlobalContext();
  const handleClick = (e) => {
    if (e.currentTarget.id === "level") {
      setProficiency(
        levels.find((level) => level.title === e.currentTarget.title).title
      );
      setLearningView("topics");
    }
  };

  useEffect(() => {
    if (learningView === "topics" && proficiency) {
      const filteredTopics = topicsData.filter(
        (topic) => topic.proficiency === proficiency
      );
      setTopics(filteredTopics);
    }
  }, [learningView, proficiency]);

  return (
    <section className="structured-learning">
      <h2>Structured Learning</h2>
      {learningView === "levels" ? (
        <article>
          {levels.map((level, index) => {
            const { title, info, useCase, topics } = level;
            return (
              <span key={index}>
                <Button handleClick={handleClick} id={useCase} title={title}>
                  <h3>{title}</h3>
                  <p>{info}</p>
                  <div>
                    <h4>Topics Covered:</h4>
                    <ul>
                      {topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </Button>
              </span>
            );
          })}
        </article>
      ) : (
        <div>
          {topics.map((topic, index) => {
            const { title, proficiency, hours, info, useCase } = topic;

            return (
              <span key={index}>
                <Button id={useCase}>
                  <Link to={`/study/${title}`}>
                    <h3>{title}</h3>
                    <p>{info}</p>
                    <div>
                      <p>Proficiency: {proficiency}</p>
                      <p>Estimated Hours: {hours}</p>
                    </div>
                  </Link>
                </Button>
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default StructuredLearningPage;
