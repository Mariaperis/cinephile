import {
  render,
  screen,
} from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import MovieCard from "../components/movie/MovieCard";

const movie = {
  id: 1,
  title: "Nightfall City",
  genre: "Sci-Fi",
  rating: 8.9,
  image: "/movies/nightfall.jpg",
};

describe("MovieCard", () => {

  test("renders movie title", () => {

    render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        /Nightfall City/i
      )
    ).toBeInTheDocument();

  });

});