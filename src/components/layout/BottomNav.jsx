import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiCompass,
  FiHeart,
  FiUser,
} from "react-icons/fi";

function BottomNav() {

  const navItems = [
    {
      path: "/homepage",
      icon: <FiHome />,
      label: "Home",
    },

    {
      path: "/explore",
      icon: <FiCompass />,
      label: "Explorer",
    },

    {
      path: "/favorites",
      icon: <FiHeart />,
      label: "Favorites",
    },

    {
      path: "/profile",
      icon: <FiUser />,
      label: "Profile",
    },
  ];

  return (
    <nav
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        w-[92%]
        max-w-md
        bg-[#111111]/95
        backdrop-blur-xl
        border
        border-zinc-800
        rounded-2xl
        px-4
        py-3
        flex
        items-center
        justify-between
        shadow-2xl
        z-50
      "
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `
              flex
              flex-col
              items-center
              justify-center
              gap-1
              transition-all
              duration-300
              ${
                isActive
                  ? "text-lime-400"
                  : "text-zinc-500 hover:text-white"
              }
            `
          }
        >
          {/* ICON */}
          <span className="text-xl">
            {item.icon}
          </span>

          {/* LABEL */}
          <span className="text-[11px] font-medium">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;