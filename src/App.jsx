import {
  FreeCanvasPage,
  LandingPage,
  StructuredLearningPage,
  StudyPage,
} from "./pages/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/structured-learning"
            element={<StructuredLearningPage />}
          />
          <Route path="/free-canvas" element={<FreeCanvasPage />} />
          <Route path="/study/:topic" element={<StudyPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
