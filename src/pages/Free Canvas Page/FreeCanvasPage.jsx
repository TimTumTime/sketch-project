import React from "react";
import { Canvas } from "../../components";
import ToolBar from "../../components/Tool Bar/ToolBar";
import { useGlobalContext } from "../../Context.jsx";
import { FaAngleRight } from "react-icons/fa";

const FreeCanvasPage = () => {
  const { isToolbarOpen: isToolbarOpen, openToolbar: openToolbar } =
    useGlobalContext();

  return (
    <section className="free-canvas-page">
      <Canvas />

      <button onClick={openToolbar} className="toolbar-toggle">
        <FaAngleRight />
      </button>
      <ToolBar />
    </section>
  );
};

export default FreeCanvasPage;
