import { Canvas } from "../../components";
import { CanvasProvider } from "../../Context.jsx";
import "./FreeCanvasPage.css";

const FreeCanvasPage = () => {
  return (
    <section className="free-canvas-page">
      <CanvasProvider>
        <Canvas isToolBarPresent={true} />
      </CanvasProvider>
    </section>
  );
};

export default FreeCanvasPage;
