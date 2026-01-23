import ExercisePage from "./pages/Exercise Page/ExercisePage.jsx";
import {
  FreeCanvasPage,
  LandingPage,
  StructuredLearningPage,
  StudyPage,
} from "./pages/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransitionOverlay from "./components/Transition Overlay/TransitionOverlay.jsx";
import HeaderBar from "./components/Header Bar/HeaderBar.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/structured-learning"
            element={<StructuredLearningPage />}
          />
          <Route path="/free-canvas" element={<FreeCanvasPage />} />
          <Route path="/study/:topic" element={<StudyPage />} />
          <Route path="/study/:topic/:exercise" element={<ExercisePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
