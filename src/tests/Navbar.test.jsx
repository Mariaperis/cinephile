import {
  render,
  screen,
} from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

describe("Navbar", () => {

  test("renders cinephile logo", () => {

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/CINEPHILE/i)
    ).toBeInTheDocument();

  });

});