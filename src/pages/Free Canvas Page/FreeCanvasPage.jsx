import React from "react";
import { Canvas, HeaderBar } from "../../components";
import ToolBar from "../../components/Tool Bar/ToolBar";
import { useGlobalContext } from "../../Context.jsx";
import { FaAngleRight } from "react-icons/fa";
import "./FreeCanvasPage.css";

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
