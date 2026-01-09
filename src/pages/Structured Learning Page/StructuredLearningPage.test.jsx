import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StructuredLearningPage from "./StructuredLearningPage";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

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
      <MemoryRouter>
        <StructuredLearningPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /Beginner/i }));
    await user.click(screen.getByRole("button", { name: /Linework/i }));
    expect(window.location.href).toContain("/study/");
  });
});
