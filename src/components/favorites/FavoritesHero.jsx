import { FiHeart } from "react-icons/fi";

function FavoritesHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-zinc-900
        bg-[#111111]
        p-8
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#9EFF0015,transparent_60%)]
        "
      />

      {/* DECORATIVE BLUR */}
      <div
        className="
          absolute
          -top-10
          right-0
          w-40
          h-40
          rounded-full
          bg-lime-400/10
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ICON */}
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-lime-400
            text-black
            flex
            items-center
            justify-center
          "
        >

          <FiHeart size={28} />

        </div>

        {/* LABEL */}
        <span
          className="
            inline-block
            mt-8
            text-lime-400
            uppercase
            tracking-[0.3em]
            text-xs
            font-medium
          "
        >
          Personal Collection
        </span>

        {/* TITLE */}
        <h1
          className="
            text-white
            text-5xl
            font-bold
            mt-4
            leading-tight
          "
        >
          Your Favorites
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            mt-5
            max-w-[500px]
          "
        >
          A curated archive of films that left a mark on your cinematic journey.
        </p>

      </div>

    </section>
  );
}

export default FavoritesHero;