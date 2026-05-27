import { useEffect, useState } from "react";

import { getTrendingMovies } from "../../services/movieService";

import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import ExploreHero from "../../components/explore/ExploreHero";

import RecentSearchesSection from "../../components/explore/RecentSearchesSection";

import CategoriesSection from "../../components/explore/CategoriesSection";

import SuggestedSection from "../../components/explore/SuggestedSection";

import TrendingSection from "../../components/movie/TrendingSection";

import NewReleasesSection from "../../components/explore/NewReleasesSection";

function ExplorePage() {
  // SEARCH
  const [searchQuery, setSearchQuery] = useState("");

  // FILTER
  const [selectedGenre, setSelectedGenre] = useState("all");

  // MOVIES
  const [movies, setMovies] = useState([]);

  // LOADING
  const [loading, setLoading] = useState(true);

  // ERROR
  const [error, setError] = useState(null);

  const filteredMovies = movies.filter((movie) => {
    const title = movie.title?.toLowerCase() || "";
    const overview = movie.overview?.toLowerCase() || "";

    return (
      title.includes(searchQuery.toLowerCase()) ||
      overview.includes(searchQuery.toLowerCase())
    );
  });

  // FETCH MOVIES
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("FETCH START");

        setLoading(true);

        const data = await getTrendingMovies();

        console.log("TMDB DATA:", data);

        setMovies(data.results);
      } catch (err) {
        console.error("FETCH ERROR:", err);

        setError("Error loading movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <PageContainer>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="mt-6">
        <ExploreHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </section>

      {/* RECENT SEARCHES */}
      <section className="mt-12">
        <RecentSearchesSection />
      </section>

      {/* CATEGORIES */}
      <section className="mt-12">
        <CategoriesSection />
      </section>

      {/* SUGGESTED */}
      <section className="mt-12">
        <SuggestedSection />
      </section>

      {/* TRENDING */}
      <section className="mt-12">
        <TrendingSection
          movies={filteredMovies}
          loading={loading}
          error={error}
          selectedGenre={selectedGenre}
          searchQuery={searchQuery}
        />
      </section>

      {/* NEW RELEASES */}
      <section className="mt-12 pb-32">
        <NewReleasesSection />
      </section>

      {/* BOTTOM NAV */}
      <BottomNav />
    </PageContainer>
  );
}

export default ExplorePage;
