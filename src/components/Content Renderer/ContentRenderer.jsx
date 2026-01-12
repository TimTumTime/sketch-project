import React from "react";
import Canvas from "../Canvas/Canvas";

const ContentRenderer = ({ content }) => {
  if (!content) {
    return <h2>There was no data!</h2>;
  }
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
            return <img key={index} src={data.src} alt={data.alt} />;

          case "canvas":
            return (
              <Canvas key={index} height={data.height} width={data.width} />
            );
          default:
            return null;
        }
      })}
    </article>
  );
};

export default ContentRenderer;
