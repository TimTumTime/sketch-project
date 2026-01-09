import React from "react";

const ContentRenderer = ({ content }) => {
  const { topic, title, content: contentItems } = content;

  return (
    <article>
      <h2>{title}</h2>
      <h5>{topic}</h5>
      {contentItems.map((item, index) => {
        const { type, data } = item;
        switch (type) {
          case "text":
            return <p key={index}>{data}</p>;
          case "image":
            return <img key={index} src={data} alt="" />;
          default:
            return null;
        }
      })}
    </article>
  );
};

export default ContentRenderer;
