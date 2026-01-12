import { ContentRenderer } from "../../components";
import { studyData } from "../../data";
import { useParams } from "react-router";

const StudyPage = () => {
  const { topic } = useParams();
  if (topic === undefined) {
    return <h2>No topic!</h2>;
  }
  return (
    <section className="study-page">
      <ContentRenderer
        content={studyData.find((item) => item.topic === topic)}
      />
    </section>
  );
};

export default StudyPage;
