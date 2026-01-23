import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StudyPage, ExercisePage, StructuredLearningPage } from "../index.jsx";
import { describe, expect, test } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "../../Context";

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
    const mockContextValues = {
      learningView: "topics",
      proficiency: "Beginner",
    };
    render(
      <MemoryRouter initialEntries={["/study/Linework"]}>
        <AppContext.Provider value={mockContextValues}>
          <Routes>
            <Route
              path="/structured-learning"
              element={<StructuredLearningPage />}
            />
            <Route path="/study/:topic" element={<StudyPage />} />
          </Routes>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByTestId("back-btn"));

    expect(screen.getAllByText("Estimated Hours: 0")).length.greaterThanOrEqual(
      3
    );
  });

  test("Clicking the return button when no exercises are present navigates to the structured learning page with the correct view", async () => {
    render(
      <MemoryRouter initialEntries={["/structured-learning"]}>
        <AppContext.Provider value={{ learningView: "topics" }}>
          <Routes>
            <Route
              path="/structured-learning"
              element={<StructuredLearningPage />}
            />
            <Route path="/study/:topic" element={<StudyPage />} />
          </Routes>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText("Introduction to sketching"));
    await user.click(screen.getByText("Return to Structured Learning"));
    expect(
      screen.getByRole("button", { name: /Linework/i })
    ).toBeInTheDocument();
  });
});
