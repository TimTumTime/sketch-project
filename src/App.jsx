import StructuredLearningPage from "./pages/Structured Learning Page/StructuredLearningPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import StudyPage from "./pages/Study Page/StudyPage.jsx";
import { FreeCanvasPage } from "./pages/index.jsx";
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
