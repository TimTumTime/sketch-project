import { useEffect, useState } from "react";
import { topicsData, levelsData } from "../../data";
import { Button } from "../../components";
import { Link } from "react-router-dom";

const StructuredLearningPage = () => {
  const [currentView, setCurrentView] = useState("levels");
  const [levels, setLevels] = useState(levelsData);
  const [topics, setTopics] = useState(topicsData);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClick = (e) => {
    if (e.target.id === "level") {
      setSelectedLevel(
        levels.find((level) => level.title === e.target.title).title
      );
      setCurrentView("topics");
    } else if (e.target.id === "topic") {
      window.location.href = `/study/${e.target.title}`;
    }
  };

  useEffect(() => {
    if (currentView === "topics" && selectedLevel) {
      const filteredTopics = topicsData.filter(
        (topic) => topic.proficiency === selectedLevel
      );
      setTopics(filteredTopics);
    }
  }, [currentView, selectedLevel]);

  return (
    <section className="structured-learning">
      <h2>Structured Learning</h2>
      {currentView === "levels" ? (
        <article>
          {levels.map((level, index) => {
            const { title, info, useCase, topics } = level;
            return (
              <Button
                key={index}
                handleClick={handleClick}
                id={useCase}
                title={title}
              >
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
            );
          })}
        </article>
      ) : (
        <div>
          {topics.map((topic, index) => {
            const { title, proficiency, hours, info, useCase } = topic;

            return (
              <Button key={index} id={useCase}>
                <Link to={`/study/${title}`}>
                  <h3>{title}</h3>
                  <p>{info}</p>
                  <div>
                    <p>Proficiency: {proficiency}</p>
                    <p>Estimated Hours: {hours}</p>
                  </div>
                </Link>
              </Button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default StructuredLearningPage;
