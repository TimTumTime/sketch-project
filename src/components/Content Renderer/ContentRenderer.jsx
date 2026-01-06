import React from "react";

const ContentRenderer = ({ content }) => {
  const { topic, title, content: contentItems } = content;

  return contentItems.map((item, index) => {
    const { type, data } = item;
    switch (type) {
      case "text":
        return <p key={index}>{data}</p>;
      case "image":
        return <img key={index} src={data} alt="" />;
      default:
        return null;
    }
  });
};

export default ContentRenderer;
