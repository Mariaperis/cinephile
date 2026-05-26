import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import MovieHero from "../../components/movie/MovieHero";
import CastSection from "../../components/movie/CastSection";
import RelatedMoviesSection from "../../components/movie/RelatedMoviesSection";

function MovieDetailsPage() {
  // URL PARAM
  const { id } = useParams();

  // TRAILER MODAL
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  // MOCK MOVIE
  const movie = {
    id,
    title: "Nightfall City",
    description:
      "A lone detective navigates the neon-soaked streets of a crumbling metropolis.",
    rating: 8.9,
    duration: "2h 15m",
    year: "2024",
    genres: ["Noir", "Thriller", "Sci-Fi"],
    director: "Julian Vane",
    backdrop: "/movies/nightfall.jpg",
  };

  return (
    <PageContainer>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <MovieHero movie={movie} onOpenTrailer={() => setIsTrailerOpen(true)} />

      {/* CAST */}
      <section className="mt-14">
        <CastSection movieId={id} />
      </section>

      {/* RELATED */}
      <section className="mt-14 pb-32">
        <RelatedMoviesSection movieId={id} />
      </section>

      {/* TRAILER MODAL */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        trailerUrl="https://www.youtube.com/embed/YoHD9XEInc0"
      />
      {/* luego */}
      {/* <TrailerModal /> */}

      <BottomNav />
    </PageContainer>
  );
}

export default MovieDetailsPage;
