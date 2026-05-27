import { render, screen, fireEvent } from "@testing-library/react";

import LoginForm from "../components/auth/LoginForm";
import { MemoryRouter } from "react-router-dom";

describe("LoginForm", () => {
  test("renders inputs and button", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    expect(
      screen.getByPlaceholderText(/Introduce tu correo/i),
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/Introduce tu contraseña/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Iniciar sesión/i,
      }),
    ).toBeInTheDocument();
  });

  test("shows validation error", async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", {
      name: /Iniciar sesión/i,
    });

    fireEvent.click(button);

    expect(
      await screen.findByText(/Todos los campos son obligatorios/i),
    ).toBeInTheDocument();
  });
});
