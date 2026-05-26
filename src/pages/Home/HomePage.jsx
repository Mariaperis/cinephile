import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import SearchBar from "../../components/search/SearchBar";
import GenreFilterBar from "../../components/search/GenreFilterBar";

import TrendingSection from "../../components/movie/TrendingSection";
import ExploreSection from "../../components/movie/ExploreSection";

function ExplorePage() {
  return (
    <PageContainer>

      {/* NAVBAR */}
      <Navbar />

      {/* SEARCH */}
      <section className="mt-6">
        <SearchBar />
      </section>

      {/* TRENDING */}
      <section className="mt-10">
        <TrendingSection />
      </section>

      {/* FILTERS */}
      <section className="mt-8">
        <GenreFilterBar />
      </section>

      {/* EXPLORE */}
      <section className="mt-10 pb-32">
        <ExploreSection />
      </section>

      {/* BOTTOM NAV */}
      <BottomNav />

    </PageContainer>
  );
}

export default ExplorePage;