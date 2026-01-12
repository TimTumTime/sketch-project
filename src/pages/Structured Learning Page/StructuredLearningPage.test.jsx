import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StructuredLearningPage from "./StructuredLearningPage";
import { describe, expect, test } from "vitest";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import StudyPage from "../Study Page/StudyPage";

describe("Rendering the page as intended", () => {
  test("Renders the canvas component within the whole screen", () => {
    const { asFragment } = render(<StructuredLearningPage />);
    expect(asFragment).toMatchSnapshot();
  });
});

describe("Page functions as intended", () => {
  test("Clicking the level component removes all level components and brings up topic components", async () => {
    const { getByRole } = render(
      <MemoryRouter>
        <StructuredLearningPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const levelElement = getByRole("button", { name: /Beginner/i });
    await user.click(levelElement);

    expect(screen.queryByText("Beginner")).not.toBeInTheDocument();
  });

  test("Clicking the topic component navigates to a study page", async () => {
    render(
      <MemoryRouter initialEntries={["/structured-learning"]}>
        <Routes>
          <Route
            path="/structured-learning"
            element={<StructuredLearningPage />}
          />
          <Route path="/study/:topic" element={<StudyPage />} />
          <Route
            path="/study"
            element={<Navigate to="/structured-learning" />}
          />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText("Beginner"));
    await user.click(screen.getByText("Linework"));
    expect(await screen.findByText("No topic!")).toBeInTheDocument();
    expect(await screen.findByText("Intro to Linework")).toBeInTheDocument();
  });
});
