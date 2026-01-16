import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StudyPage from "./StudyPage";
import ExercisePage from "../Exercise Page/ExercisePage";
import StructuredLearningPage from "../Structured Learning Page/StructuredLearningPage";
import { describe, expect, test } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("Rendering the page as intended", () => {
  test("Renders the page as normal", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/study/Linework"]}>
        <StudyPage />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
});

describe("Page functions as intended", () => {
  test("Clicking the practice button navigates to an exercise page", async () => {
    render(
      <MemoryRouter initialEntries={["/study/Linework"]}>
        <Routes>
          <Route path="/study/:topic" element={<StudyPage />} />
          <Route path="/study/:topic/:exercise" element={<ExercisePage />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText("Practice Fundamentals"));

    expect(screen.getByText("Fundamentals")).toBeInTheDocument();
  });

  test("Clicking the back button navigates to the structured learning page with the correct view", async () => {
    render(
      <MemoryRouter initialEntries={["/study/Linework"]}>
        <Routes>
          <Route
            path="/structured-learning"
            element={<StructuredLearningPage />}
          />
          <Route path="/study/:topic" element={<StudyPage />} />
          <Route path="/study" />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "back-btn" }));

    expect(screen.getByText("Beginner")).toBeInTheDocument();
  });
});
