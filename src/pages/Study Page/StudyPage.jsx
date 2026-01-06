import React from "react";
import { ContentRenderer } from "../../components";
import { studyData } from "../../data";

const StudyPage = ({ topic }) => {
  return (
    <section className="study-page">
      <ContentRenderer
        content={studyData.find((item) => item.topic === topic)}
      />
    </section>
  );
};

export default StudyPage;
