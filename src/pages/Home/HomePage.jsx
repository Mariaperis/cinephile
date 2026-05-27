import { useEffect, useRef, useState } from "react";

import { getTrendingMovies, searchMulti } from "../../services/movieService";

import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import SearchBar from "../../components/search/SearchBar";
import GenreFilterBar from "../../components/search/GenreFilterBar";

import TrendingSection from "../../components/movie/TrendingSection";
import ExploreSection from "../../components/movie/ExploreSection";

function ExplorePage() {
  // SEARCH
  const [searchQuery, setSearchQuery] = useState("");

  // FILTER
  const [selectedGenre, setSelectedGenre] = useState("all");

  // MOVIES
  const [movies, setMovies] = useState([]);

  // STATES
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);

  const [loadMoreError, setLoadMoreError] = useState(null);

  // OBSERVER
  const observerRef = useRef(null);

  // INITIAL LOADING
  const initialLoading = loading && page === 1;

  /*
   -----------------------------------
   TRENDING MOVIES
   -----------------------------------
  */
  useEffect(() => {
    // DON'T FETCH TRENDING
    // DURING SEARCH
    if (searchQuery.trim()) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await getTrendingMovies(page);

        if (!data.results.length) {
          setHasMore(false);
          return;
        }

        setMovies((prev) => {
          const newMovies = data.results.filter(
            (movie) => !prev.some((m) => m.id === movie.id),
          );

          return [...prev, ...newMovies];
        });
      } catch (err) {
        console.error(err);

        if (page === 1) {
          setError("Error loading movies");
        } else {
          setLoadMoreError("Failed to load more movies");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, searchQuery]);

  /*
   -----------------------------------
   SEARCH
   -----------------------------------
  */
  useEffect(() => {
    const search = async () => {
      // RESET TRENDING
      if (!searchQuery.trim()) {
        setMovies([]);

        setPage(1);

        setHasMore(true);

        return;
      }

      try {
        setLoading(true);

        const data = await searchMulti(searchQuery);

        const results = data.results.filter(
          (item) => item.media_type === "movie" || item.media_type === "person",
        );

        setMovies(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [searchQuery]);

  /*
   -----------------------------------
   INFINITE SCROLL
   -----------------------------------
  */
  const lastMovieElementRef = (node) => {
    // DISABLE DURING SEARCH
    if (loading || searchQuery.trim()) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) {
      observerRef.current.observe(node);
    }
  };

  return (
    <PageContainer>
      {/* NAVBAR */}
      <Navbar />

      {/* SEARCH */}
      <section className="mt-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </section>

      {/* FILTERS */}
      <section className="mt-8">
        <GenreFilterBar />
      </section>

      {/* TRENDING */}
      <section className="mt-10">
        <TrendingSection
          movies={movies}
          loading={initialLoading}
          error={error}
          selectedGenre={selectedGenre}
          searchQuery={searchQuery}
          lastMovieElementRef={lastMovieElementRef}
        />
      </section>

      {/* LOAD MORE */}
      {!searchQuery.trim() && loading && page > 1 && (
        <div className="flex justify-center py-8">
          <div
            className="
          w-8
          h-8
          border-4
          border-lime-400
          border-t-transparent
          rounded-full
          animate-spin
        "
          />
        </div>
      )}

      {/* LOAD MORE ERROR */}
      {loadMoreError && (
        <div className="text-center py-8">
          <p className="text-red-400 mb-4">{loadMoreError}</p>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="
        bg-lime-400
        text-black
        px-5
        py-2
        rounded-xl
        font-semibold
      "
          >
            Retry
          </button>
        </div>
      )}

      {/* NO MORE RESULTS */}
      {!hasMore && !loading && (
        <div
          className="
      text-center
      text-zinc-500
      py-10
      text-sm
    "
        >
          No more movies available.
        </div>
      )}

      {/* EXPLORE */}
      <section className="mt-10 pb-44">
        <ExploreSection />
      </section>

      {/* BOTTOM NAV */}
      <BottomNav />
    </PageContainer>
  );
}

export default ExplorePage;
