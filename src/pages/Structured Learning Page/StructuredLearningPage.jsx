import { useEffect, useState } from "react";
import { topicsData, levelsData } from "../../data";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./StructuredLearningPage.css";

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
        <article className="level-cards">
          {levels.map((level, index) => {
            const { title, info, useCase, topics } = level;
            return (
              <span key={index} className="level-card">
                <Button
                  handleClick={handleClick}
                  id={useCase}
                  title={title}
                  className={"level-btn"}
                >
                  <h3>{title}</h3>
                  <p>{info}</p>
                  <img src={level.logo} alt={`${title} level logo`} />
                  <div>
                    <h4>Topics Covered:</h4>
                    <span>
                      {topics.map((topic, idx) => (
                        <p key={idx}>{topic}</p>
                      ))}
                    </span>
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
              <article key={index} className="topic-cards">
                <div className="topic-card">
                  <Button id={useCase} className={"topic-btn"}>
                    <Link to={`/study/${title}`}>
                      <h3>{title}</h3>
                      <p>{info}</p>
                      <div>
                        <p>Proficiency: {proficiency}</p>
                        <p>Estimated Hours: {hours}</p>
                      </div>
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default StructuredLearningPage;
