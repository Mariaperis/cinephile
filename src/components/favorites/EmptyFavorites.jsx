import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function EmptyFavorites() {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore");
  };

  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        py-28
      "
    >

      {/* ICON */}
      <div
        className="
          w-24
          h-24
          rounded-full
          bg-[#111111]
          border
          border-zinc-800
          flex
          items-center
          justify-center
        "
      >

        <FiHeart
          size={36}
          className="text-lime-400"
        />

      </div>

      {/* TITLE */}
      <h2
        className="
          text-white
          text-4xl
          font-bold
          mt-10
        "
      >
        No favorites yet
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-zinc-500
          text-lg
          leading-relaxed
          mt-5
          max-w-[420px]
        "
      >
        Start exploring movies and create your own curated cinematic collection.
      </p>

      {/* BUTTON */}
      <button
        onClick={handleExplore}
        className="
          mt-10
          bg-lime-400
          text-black
          font-semibold
          px-8
          py-4
          rounded-2xl
          hover:bg-lime-300
          transition-colors
          duration-300
        "
      >
        Explore Movies
      </button>

    </section>
  );
}

export default EmptyFavorites;