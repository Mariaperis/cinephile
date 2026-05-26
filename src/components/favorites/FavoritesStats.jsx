import {
  FiHeart,
  FiStar,
  FiFilm,
} from "react-icons/fi";

function FavoritesStats({
  total = 0,
}) {

  // MOCK VALUES
  const averageRating = 4.8;
  const favoriteGenre = "Sci-Fi";

  return (
    <section
      className="
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-4
      "
    >

      {/* TOTAL FAVORITES */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-[#111111]
          p-5
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#9EFF0010,transparent_60%)]
          "
        />

        <div className="relative z-10">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-lime-400
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
              text-sm
              mt-5
            "
          >
            Total Favorites
          </p>

          <h3
            className="
              text-white
              text-4xl
              font-bold
              mt-2
            "
          >
            {total}
          </h3>

        </div>

      </div>

      {/* AVERAGE RATING */}
      <div
        className="
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-[#111111]
          p-5
        "
      >

        <div
          className="
            w-12
            h-12
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
            text-sm
            mt-5
          "
        >
          Average Rating
        </p>

        <h3
          className="
            text-white
            text-4xl
            font-bold
            mt-2
          "
        >
          {averageRating}
        </h3>

      </div>

      {/* FAVORITE GENRE */}
      <div
        className="
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-[#111111]
          p-5
        "
      >

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-blue-500
            text-black
            flex
            items-center
            justify-center
          "
        >

          <FiFilm size={20} />

        </div>

        <p
          className="
            text-zinc-500
            text-sm
            mt-5
          "
        >
          Favorite Genre
        </p>

        <h3
          className="
            text-white
            text-3xl
            font-bold
            mt-2
          "
        >
          {favoriteGenre}
        </h3>

      </div>

    </section>
  );
}

export default FavoritesStats;