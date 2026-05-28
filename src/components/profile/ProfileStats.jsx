import {
  FiFilm,
  FiHeart,
  FiStar,
} from "react-icons/fi";

function ProfileStats({
  movies = 248,
  favorites = 67,
  reviews = 31,
}) {
  return (
    <section
      className="
        grid
        grid-cols-3
        gap-4
      "
    >

      {/* MOVIES */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-[#111111]
          p-5
          text-center
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#9EFF0010,transparent_70%)]
          "
        />

        <div className="relative z-10">

          {/* ICON */}
          <div
            className="
              w-12
              h-12
              mx-auto
              rounded-xl
              bg-lime-400
              text-black
              flex
              items-center
              justify-center
            "
          >

            <FiFilm size={20} />

          </div>

          {/* LABEL */}
          <p
            className="
              text-zinc-500
              text-xs
              uppercase
              tracking-[0.15em]
              mt-4
            "
          >
            Movies
          </p>

          {/* VALUE */}
          <h3
            className="
              text-white
              text-3xl
              font-bold
              mt-2
            "
          >
            {movies}
          </h3>

        </div>

      </div>

      {/* FAVORITES */}
      <div
        className="
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-[#111111]
          p-5
          text-center
        "
      >

        <div
          className="
            w-12
            h-12
            mx-auto
            rounded-xl
            bg-pink-500
            text-black
            flex
            items-center
            justify-center
          "
        >

          <FiHeart size={20} />

        </div>

        <p
          className="
            text-zinc-500
            text-xs
            uppercase
            tracking-[0.15em]
            mt-4
          "
        >
          Favorites
        </p>

        <h3
          className="
            text-white
            text-3xl
            font-bold
            mt-2
          "
        >
          {favorites}
        </h3>

      </div>

      {/* REVIEWS */}
      <div
        className="
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-[#111111]
          p-5
          text-center
        "
      >

        <div
          className="
            w-12
            h-12
            mx-auto
            rounded-xl
            bg-yellow-500
            text-black
            flex
            items-center
            justify-center
          "
        >

          <FiStar size={20} />

        </div>

        <p
          className="
            text-zinc-500
            text-xs
            uppercase
            tracking-[0.15em]
            mt-4
          "
        >
          Reviews
        </p>

        <h3
          className="
            text-white
            text-3xl
            font-bold
            mt-2
          "
        >
          {reviews}
        </h3>

      </div>

    </section>
  );
}

export default ProfileStats;