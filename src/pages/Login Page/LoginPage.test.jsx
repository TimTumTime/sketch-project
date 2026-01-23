import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";

describe("Page functions as intended", () => {
  test("Registering a new user calls the register function", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.type(screen);
  });

  test("Pressing the button to switch to register view works", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText("Register"));

    expect(screen.getByText("Register an Account")).toBeInTheDocument();
  });

  test("Logging in an existing user calls the login function", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "password123");
    await user.click(screen.getByText("Login"));

    expect(screen.getByText(""));
  });

  test("Failure to fill required fields shows error message", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText("Login"));

    expect(screen.getByText("Please fill in all required fields."));
  });
});
