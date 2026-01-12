import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StudyPage from "./StudyPage";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

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
  test("Drawing on a rendered canvas component works", async () => {});
  test("");
});
