function AchievementCard({
  achievement,
}) {

  return (
    <article
      className={`
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        p-5
        transition-all
        duration-300
        ${
          achievement.unlocked
            ? `
              border-lime-400/30
              bg-[#111111]
            `
            : `
              border-zinc-800
              bg-[#0b0b0b]
              opacity-60
            `
        }
      `}
    >

      {/* GLOW */}
      {achievement.unlocked && (
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#9EFF0010,transparent_70%)]
          "
        />
      )}

      <div className="relative z-10">

        {/* ICON */}
        <div
          className="
            text-4xl
          "
        >
          {achievement.icon}
        </div>

        {/* TITLE */}
        <h3
          className="
            text-white
            text-lg
            font-semibold
            mt-5
          "
        >
          {achievement.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-zinc-500
            text-sm
            leading-relaxed
            mt-3
          "
        >
          {achievement.description}
        </p>

        {/* STATUS */}
        <div className="mt-5">

          {achievement.unlocked ? (

            <span
              className="
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                bg-lime-400
                text-black
                text-xs
                font-semibold
              "
            >
              Unlocked
            </span>

          ) : (

            <span
              className="
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                bg-zinc-800
                text-zinc-400
                text-xs
                font-semibold
              "
            >
              Locked
            </span>

          )}

        </div>

      </div>

    </article>
  );
}

export default AchievementCard;