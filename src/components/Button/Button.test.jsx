import { render } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import Button from "./Button";

describe("Rendering the component properly", () => {
  test("Render a level component", () => {
    const { getByRole } = render(<Button useCase="level" />);
    const titleElement = getByRole("button");
    expect(titleElement).toBeInTheDocument();
  });
  test("Render a topic component", () => {
    const { asFragment } = render(
      <Button
        useCase="topic"
        title="Placeholder Topic"
        info="Placeholder Info"
        proficiency="Beginner"
        hours={0}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
