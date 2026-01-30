import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import LandingPage from "../Landing Page/LandingPage.jsx";
import { AppProvider } from "../../Context.jsx";

describe("Phase 2", () => {
  test("Pressing the button to switch to register view works", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText("Don't have an account? Sign Up"));

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("Registering a new user calls the register function", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText("Don't have an account? Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Username"), "Test User");
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "password123");

    await user.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Structured Learning")).toBeInTheDocument();
  });

  test("Logging in an existing user calls the login function", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "password123");

    await user.click(screen.getByText("Login"));

    expect(screen.getByText("Structured Learning")).toBeInTheDocument();
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
