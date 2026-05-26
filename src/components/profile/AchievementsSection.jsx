import AchievementCard from "./AchievementCard";

// MOCK DATA
const achievements = [
  {
    id: 1,
    title: "Sci-Fi Master",
    description: "Watched 50 Sci-Fi movies",
    icon: "🚀",
    unlocked: true,
  },

  {
    id: 2,
    title: "Noir Explorer",
    description: "Completed 20 noir films",
    icon: "🌃",
    unlocked: true,
  },

  {
    id: 3,
    title: "Critic",
    description: "Published 10 reviews",
    icon: "⭐",
    unlocked: false,
  },

  {
    id: 4,
    title: "Collector",
    description: "Saved 100 favorites",
    icon: "🎬",
    unlocked: false,
  },
];

function AchievementsSection() {

  // EMPTY STATE
  if (!achievements.length) {
    return null;
  }

  return (
    <section>

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <h2
          className="
            text-white
            text-3xl
            font-bold
          "
        >
          Achievements
        </h2>

        <button
          className="
            text-lime-400
            text-sm
            hover:text-lime-300
            transition-colors
          "
        >
          View All
        </button>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        {achievements.map((achievement) => (

          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />

        ))}

      </div>

    </section>
  );
}

export default AchievementsSection;