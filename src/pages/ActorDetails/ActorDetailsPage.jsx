import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import ActorHero from "../../components/actor/ActorHero";

import FilmographyList from "../../components/actor/FilmographyList";

// MOCK DATA
const actor = {
  id: 1,
  name: "Julian Vane",
  age: 48,
  location: "London, UK",
  image: "/actors/julian.jpg",

  biography:
    "A chameleon of the modern screen, Julian Vane has spent three decades redefining the limits of character-driven performance.",

  accolades: [
    "Best Actor — Cannes 2022",
    "Critics Choice Award",
    "BAFTA Nomination",
  ],

  filmography: [
    {
      id: 1,
      title: "Nightfall City",
      image: "/movies/nightfall.jpg",
      year: 2023,
      genre: "Neo-Noir",
      rating: 8.9,
    },

    {
      id: 2,
      title: "Neon Pulse",
      image: "/movies/neon.jpg",
      year: 2020,
      genre: "Sci-Fi",
      rating: 8.5,
    },
  ],
};

function ActorDetailsPage() {

  return (
    <PageContainer>

      <Navbar />

      {/* HERO */}
      <section className="mt-6">

        <ActorHero actor={actor} />

      </section>

      {/* FILMOGRAPHY */}
      <section className="mt-12 pb-32">

        <FilmographyList
          movies={actor.filmography}
        />

      </section>

      <BottomNav />

    </PageContainer>
  );
}

export default ActorDetailsPage;