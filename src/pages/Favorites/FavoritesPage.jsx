import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import FavoritesHero from "../../components/favorites/FavoritesHero";

import FavoritesStats from "../../components/favorites/FavoritesStats";

import EmptyFavorites from "../../components/favorites/EmptyFavorites";

import MovieGrid from "../../components/movie/MovieGrid";

// MOCK DATA
const favorites = [
  {
    id: 1,
    title: "Blade Runner 2049",
    genre: "Sci-Fi",
    rating: 9.2,
    image: "/movies/bladerunner.jpg",
  },

  {
    id: 2,
    title: "The Batman",
    genre: "Noir",
    rating: 8.1,
    image: "/movies/batman.jpg",
  },
];

function FavoritesPage() {

  const hasFavorites =
    favorites.length > 0;

  return (
    <PageContainer>

      <Navbar />

      {/* HERO */}
      <section className="mt-6">

        <FavoritesHero />

      </section>

      {/* STATS */}
      {hasFavorites && (
        <section className="mt-10">

          <FavoritesStats
            total={favorites.length}
          />

        </section>
      )}

      {/* GRID */}
      <section className="mt-10 pb-32">

        {hasFavorites ? (

          <MovieGrid
            movies={favorites}
          />

        ) : (

          <EmptyFavorites />

        )}

      </section>

      <BottomNav />

    </PageContainer>
  );
}

export default FavoritesPage;