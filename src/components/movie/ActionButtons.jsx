import {
  FiPlay,
  FiHeart,
  FiPlus,
} from "react-icons/fi";

function ActionButtons({
  onOpenTrailer,
  onFavorite,
  onSave,
  isFavorite = false,
}) {
  return (
    <div className="flex gap-4 mt-10">

      {/* TRAILER BUTTON */}
      <button
        onClick={onOpenTrailer}
        className="
          flex
          items-center
          gap-3
          bg-white
          text-black
          px-8
          py-5
          rounded-2xl
          font-semibold
          hover:bg-zinc-200
          transition-colors
          duration-300
        "
      >

        <FiPlay size={18} />

        Watch Trailer

      </button>

      {/* FAVORITE BUTTON */}
      <button
        onClick={onFavorite}
        className={`
          w-16
          h-16
          rounded-2xl
          border
          flex
          items-center
          justify-center
          transition-all
          duration-300
          ${
            isFavorite
              ? `
                bg-lime-400
                border-lime-400
                text-black
              `
              : `
                bg-black/30
                border-zinc-700
                text-white
                hover:border-lime-400/40
              `
          }
        `}
      >

        <FiHeart size={22} />

      </button>

      {/* SAVE BUTTON */}
      <button
        onClick={onSave}
        className="
          w-16
          h-16
          rounded-2xl
          border
          border-zinc-700
          bg-black/30
          text-white
          flex
          items-center
          justify-center
          hover:border-lime-400/40
          transition-all
          duration-300
        "
      >

        <FiPlus size={22} />

      </button>

    </div>
  );
}

export default ActionButtons;