import { Button, ContentRenderer } from "../../components";
import { studyData } from "../../data";
import { Link, useParams } from "react-router-dom";

const StudyPage = () => {
  const { topic } = useParams();
  if (topic === undefined) {
    return <h2>No topic!</h2>;
  }

  const data = studyData.find((item) => item.topic === topic);

  return (
    <section className="study-page">
      <ContentRenderer content={data} />
      {data.exercises ? (
        <Button className={"practice-btn"}>
          <Link to={`/study/${topic}/${data.exercises[0].name}`}>
            <h5>Practice {data.exercises[0].name}</h5>
          </Link>
        </Button>
      ) : (
        <Button>
          <Link to={`/structured-learning`}>
            <h5>Return to Structured Learning</h5>
          </Link>
        </Button>
      )}
    </section>
  );
};

export default StudyPage;
