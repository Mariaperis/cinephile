import { useEffect, useState, } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, getMovieCredits, getRelatedMovies, } from "../../services/movieService";
import PageContainer from "../../components/layout/PageContainer";
import BottomNav from "../../components/layout/BottomNav";
import CastSection from "../../components/movie/CastSection";
import MovieGrid from "../../components/movie/MovieGrid";
import Navbar from "../../components/layout/Navbar";

function MovieDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  const [credits, setCredits] = useState([]);

  const [relatedMovies, setRelatedMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);

        const [movieData, creditsData, relatedData] = await Promise.all([
          getMovieDetails(id),
          getMovieCredits(id),
          getRelatedMovies(id),
        ]);

        setMovie(movieData);

        setCredits(creditsData.cast?.slice(0, 10));

        setRelatedMovies(relatedData.results || []);
      } catch (err) {
        console.error(err);

        setError("Failed to load movie");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  /*
  -----------------------------------
  LOADING
  -----------------------------------
  */
  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  /*
  -----------------------------------
  ERROR
  -----------------------------------
  */
  if (error) {
    return <div className="text-red-400 p-10">{error}</div>;
  }

  /*
  -----------------------------------
  NO MOVIE
  -----------------------------------
  */
  if (!movie) return null;

  return (
    <PageContainer>
      {/* NAVBAR */}
      <Navbar />

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
        absolute
        top-[max(4.5rem,env(safe-area-inset-top))]
        left-4
        z-50

        w-12
        h-12

        flex
        items-center
        justify-center

        rounded-full

        bg-black/50
        backdrop-blur-xl

        border
        border-white/10

        text-white

        hover:bg-black/70
        transition-all
       "
      >
        <FiArrowLeft className="text-xl" />
      </button>

      {/* BACKDROP */}
      <div
        className="
        absolute
        inset-0
        h-[200px]
        overflow-hidden
      "
      >
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
          alt={movie.title}
          className="
          w-full
          h-full
          object-cover
          opacity-30
        "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/40
          via-[#050505]/70
          to-[#050505]
        "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
        pt-13
        pb-40
      "
      >
        {/* MOVIE INFO */}
        <section
          className="
          flex
          flex-col
          md:flex-row
          gap-10
        "
        >
          {/* POSTER */}
          <div
            className="
            w-full
            md:w-[320px]
            flex-shrink-0
          "
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={movie.title}
              className="
              w-full
              rounded-[2rem]
              border
              border-zinc-800
            "
            />
          </div>

          {/* DETAILS */}
          <div className="flex-1">
            {/* TITLE */}
            <h1
              className="
              text-white
              text-5xl
              md:text-7xl
              font-bold
            "
            >
              {movie.title}
            </h1>

            {/* META */}
            <div
              className="
              flex
              gap-6
              mt-6
              text-zinc-300
            "
            >
              <span>{movie.releaseDate?.slice(0, 4)}</span>

              <span>⭐ {movie.rating.toFixed(1)}</span>

              {movie.runtime > 0 && <span>{movie.runtime} min</span>}
            </div>

            {/* OVERVIEW */}
            <p
              className="
              text-zinc-300
              text-lg
              leading-relaxed
              mt-8
              max-w-3xl
            "
            >
              {movie.overview}
            </p>

            {/* GENRES */}
            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
            >
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-zinc-700
                  text-sm
                  text-white
                "
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CAST */}
        <section className="mt-20">
          <CastSection cast={credits} />
        </section>

        {/* RELATED MOVIES */}
        <section className="mt-20">
          <h2
            className="
            text-white
            text-4xl
            font-bold
            mb-8
          "
          >
            Related Movies
          </h2>

          <MovieGrid movies={relatedMovies} />
        </section>
      </div>

      {/* BOTTOM NAV */}
      <BottomNav />
    </PageContainer>
  );
}

export default MovieDetailsPage;
