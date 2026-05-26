import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import ProfileHero from "../../components/profile/ProfileHero";

import ProfileStats from "../../components/profile/ProfileStats";

import FavoriteGenres from "../../components/profile/FavoriteGenres";

import RecentActivitySection from "../../components/profile/RecentActivitySection";

import AchievementsSection from "../../components/profile/AchievementsSection";

import WatchlistSection from "../../components/profile/WatchlistSection";

function ProfilePage() {

  // MOCK USER
  const user = {
    username: "Alex Mercer",
    avatar: "/users/alex.jpg",
    bio: "Film Collector • Sci-Fi Enthusiast",
  };

  return (
    <PageContainer>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="mt-6">

        <ProfileHero user={user} />

      </section>

      {/* STATS */}
      <section className="mt-10">

        <ProfileStats />

      </section>

      {/* GENRES */}
      <section className="mt-10">

        <FavoriteGenres />

      </section>

      {/* RECENT ACTIVITY */}
      <section className="mt-12">

        <RecentActivitySection />

      </section>

      {/* ACHIEVEMENTS */}
      <section className="mt-12">

        <AchievementsSection />

      </section>

      {/* WATCHLIST */}
      <section className="mt-12 pb-32">

        <WatchlistSection />

      </section>

      {/* BOTTOM NAV */}
      <BottomNav />

    </PageContainer>
  );
}

export default ProfilePage;