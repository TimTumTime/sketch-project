import { useEffect, useState } from "react";
import { topicsData, levelsData } from "../../data";
import { ButtonContainer } from "../../components";

const StructuredLearningPage = () => {
  const [currentView, setCurrentView] = useState("levels");
  const [levels, setLevels] = useState(levelsData);
  const [topics, setTopics] = useState(topicsData);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.id === "level") {
      setSelectedLevel(levels.find((level) => level.title === e.target.title));
      setCurrentView("topics");
    } else if (e.target.id === "topic") {
      window.location.href = `/study/${e.target.title}`;
    }
  };

  useEffect(() => {
    if (currentView === "topics" && selectedLevel) {
      const filteredTopics = topicsData.filter(
        (topic) => topic.proficiency === selectedLevel.title
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
            return (
              <ButtonContainer
                key={index}
                useCase="level"
                title={level.title}
                topics={level.topics}
                handleClick={handleClick}
              />
            );
          })}
        </article>
      ) : (
        <div>
          {topics.map((topic, index) => {
            return (
              <ButtonContainer
                key={index}
                useCase="topic"
                title={topic.title}
                proficiency={topic.proficiency}
                hours={topic.hours}
                info={topic.info}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default StructuredLearningPage;
