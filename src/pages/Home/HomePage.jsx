import { useEffect, useRef, useState } from "react";

import { getTrendingMovies, searchMulti, } from "../../services/movieService";

import Navbar from "../../components/layout/Navbar";

import BottomNav from "../../components/layout/BottomNav";

import PageContainer from "../../components/layout/PageContainer";

import SearchBar from "../../components/search/SearchBar";

import GenreFilterBar from "../../components/search/GenreFilterBar";

import TrendingSection from "../../components/movie/TrendingSection";

import ExploreSection from "../../components/movie/ExploreSection";

function HomePage() {

  /*
  -----------------------------------
  SEARCH
  -----------------------------------
  */
  const [searchQuery,
    setSearchQuery] =
    useState("");

  const [debouncedQuery,
    setDebouncedQuery] =
    useState("");

  /*
  -----------------------------------
  FILTER
  -----------------------------------
  */
  const [selectedGenre,
    setSelectedGenre] =
    useState("all");

  /*
  -----------------------------------
  MOVIES
  -----------------------------------
  */
  const [movies,
    setMovies] =
    useState([]);

  /*
  -----------------------------------
  STATES
  -----------------------------------
  */
  const [loading,
    setLoading] =
    useState(true);

  const [error,
    setError] =
    useState(null);

  const [page,
    setPage] =
    useState(1);

  const [hasMore,
    setHasMore] =
    useState(true);

  const [loadMoreError,
    setLoadMoreError] =
    useState(null);

  /*
  -----------------------------------
  OBSERVER
  -----------------------------------
  */
  const observerRef =
    useRef(null);

  /*
  -----------------------------------
  INITIAL LOADING
  -----------------------------------
  */
  const initialLoading =
    loading && page === 1;

  /*
  -----------------------------------
  DEBOUNCE SEARCH
  -----------------------------------
  */
  useEffect(() => {

    const timeout =
      setTimeout(() => {

        setDebouncedQuery(
          searchQuery
        );

        /*
        RESET PAGE
        */
        setPage(1);

      }, 500);

    return () => {
      clearTimeout(timeout);
    };

  }, [searchQuery]);

  /*
  -----------------------------------
  FETCH MOVIES
  -----------------------------------
  */
  useEffect(() => {

    const fetchMovies =
      async () => {

        try {

          setLoading(true);

          setError(null);

          /*
          -----------------------------
          SEARCH
          -----------------------------
          */
          if (debouncedQuery.trim()) {

            const data =
              await searchMulti(
                debouncedQuery
              );

            const results =
              data.results.filter(
                (item) =>
                  (
                    item.mediaType ===
                      "movie" ||

                    item.mediaType ===
                      "person"
                  ) &&
                  item.posterPath
              );

            setMovies(results);

            setHasMore(false);

            return;
          }

          /*
          -----------------------------
          TRENDING
          -----------------------------
          */
          const data =
            await getTrendingMovies(
              page
            );

          /*
          NO MORE RESULTS
          */
          if (!data.results.length) {

            setHasMore(false);

            return;
          }

          /*
          PAGE 1
          */
          if (page === 1) {

            setMovies(
              data.results
            );

            return;
          }

          /*
          APPEND MOVIES
          */
          setMovies((prev) => {

            const newMovies =
              data.results.filter(
                (movie) =>
                  !prev.some(
                    (m) =>
                      m.id === movie.id
                  )
              );

            return [
              ...prev,
              ...newMovies,
            ];
          });

        } catch (err) {

          console.error(err);

          /*
          LOAD MORE ERROR
          */
          if (page > 1) {

            setLoadMoreError(
              "Failed to load more movies"
            );

          } else {

            setError(
              "Failed to load movies"
            );
          }

        } finally {

          setLoading(false);
        }
      };

    fetchMovies();

  }, [page, debouncedQuery]);

  /*
  -----------------------------------
  INFINITE SCROLL
  -----------------------------------
  */
  const lastMovieElementRef =
    (node) => {

      /*
      DISABLE DURING SEARCH
      */
      if (
        loading ||
        debouncedQuery.trim()
      ) {
        return;
      }

      /*
      DISCONNECT OBSERVER
      */
      if (observerRef.current) {

        observerRef.current.disconnect();
      }

      /*
      CREATE OBSERVER
      */
      observerRef.current =
        new IntersectionObserver(
          (entries) => {

            if (
              entries[0]
                .isIntersecting &&
              hasMore
            ) {

              setPage((prev) =>
                prev + 1
              );
            }
          }
        );

      /*
      OBSERVE NODE
      */
      if (node) {

        observerRef.current
          .observe(node);
      }
    };

  return (
    <PageContainer>

      {/* NAVBAR */}
      <Navbar />

      {/* SEARCH */}
      <section className="mt-6">

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
        />

      </section>

      {/* FILTERS */}
      <section className="mt-8">

        <GenreFilterBar
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

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
      {!debouncedQuery.trim() &&
        loading &&
        page > 1 && (
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

          <p className="text-red-400 mb-4">
            {loadMoreError}
          </p>

          <button
            onClick={() =>
              setPage((prev) =>
                prev + 1
              )
            }
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
      {!hasMore &&
        !loading &&
        !debouncedQuery.trim() && (

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

export default HomePage;