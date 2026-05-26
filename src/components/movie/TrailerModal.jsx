import { FiX } from "react-icons/fi";

function TrailerModal({
  isOpen,
  onClose,
  trailerUrl,
}) {

  // NO RENDER
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/90
        backdrop-blur-md
        px-4
      "
    >

      {/* OVERLAY CLICK */}
      <div
        onClick={onClose}
        className="
          absolute
          inset-0
        "
      />

      {/* MODAL */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          rounded-[2rem]
          overflow-hidden
          border
          border-zinc-800
          bg-black
          shadow-2xl
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            z-20
            w-12
            h-12
            rounded-full
            bg-black/60
            border
            border-zinc-700
            text-white
            flex
            items-center
            justify-center
            hover:bg-zinc-900
            transition-colors
          "
        >

          <FiX size={22} />

        </button>

        {/* VIDEO CONTAINER */}
        <div
          className="
            relative
            w-full
            aspect-video
            bg-black
          "
        >

          <iframe
            src={trailerUrl}
            title="Movie Trailer"
            allow="
              autoplay;
              encrypted-media;
              picture-in-picture
            "
            allowFullScreen
            className="
              absolute
              inset-0
              w-full
              h-full
            "
          />

        </div>

      </div>

    </div>
  );
}

export default TrailerModal;