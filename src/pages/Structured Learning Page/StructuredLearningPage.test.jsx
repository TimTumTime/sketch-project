import { fireEvent, render, screen } from "@testing-library/react";
import StructuredLearningPage from "./StructuredLearningPage";
import { describe, expect, test } from "vitest";

describe("Rendering the page as intended", () => {
  test("Renders the canvas component within the whole screen", () => {
    const { asFragment } = render(<StructuredLearningPage />);
    expect(asFragment).toMatchSnapshot();
  });
});

describe("Page functions as intended", () => {
  test("Clicking the level component removes all level components and brings up topic components", async () => {
    const { getByText } = render(<StructuredLearningPage />);

    const levelElement = getByText("Beginner");
    fireEvent.click(levelElement);

    const newItems = await screen.findAllByText("Linework");
    expect(newItems.length).toBeGreaterThan(0);
    expect(screen.queryByText("Beginner")).not.toBeInTheDocument();
  });

  test("Clicking the topic component navigates to a study page", async () => {
    render(<StructuredLearningPage />);

    fireEvent.click(screen.getByText("Beginner"));
    fireEvent.click(screen.getByText("Linework"));
    expect(window.location.href).toContain("/study/");
  });
});
