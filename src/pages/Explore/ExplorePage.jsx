import { useState } from "react";

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

  // SEARCH STATE
  const [searchQuery, setSearchQuery] =
    useState("");

  // GENRE FILTER
  const [selectedGenre, setSelectedGenre] =
    useState("all");

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