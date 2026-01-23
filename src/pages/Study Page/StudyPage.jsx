import { FaAngleLeft } from "react-icons/fa";
import { Button, ContentRenderer } from "../../components";
import { studyData } from "../../data";
import { Link, useParams } from "react-router-dom";
import "./StudyPage.css";
const StudyPage = () => {
  const { topic } = useParams();
  if (topic === undefined) {
    return <h2>No topic!</h2>;
  }

  const data = studyData.find((item) => item.topic === topic);

  return (
    <section className="study-page">
      <div className="study-content">
        <ContentRenderer content={data} />
        {data.exercises ? (
          <div>
            <Link to={`/structured-learning`}>
              <Button className="back-btn" testId="back-btn">
                <FaAngleLeft />
              </Button>
            </Link>
            <Link to={`/study/${topic}/${data.exercises[0].name}`}>
              <Button className={"practice-btn"}>
                <h5>Practice {data.exercises[0].name}</h5>
              </Button>
            </Link>
          </div>
        ) : (
          <Link to={`/structured-learning`}>
            <Button>
              <h5>Return to Structured Learning</h5>
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default StudyPage;
