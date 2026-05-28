import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import ExplorePage from "../pages/Explore/ExplorePage";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetailsPage";
import ActorDetailsPage from "../pages/ActorDetails/ActorDetailsPage";
import FavoritesPage from "../pages/Favorites/FavoritesPage";
import LoginPage from "../pages/Auth/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/actor/:id" element={<ActorDetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRouter;