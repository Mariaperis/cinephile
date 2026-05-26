import { useNavigate } from "react-router-dom";

function CastCard({ person }) {

  const navigate = useNavigate();

  // NAVIGATION
  const handleClick = () => {
    navigate(`/actor/${person.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="
        flex-shrink-0
        w-[140px]
        cursor-pointer
        group
      "
    >

      {/* IMAGE */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-zinc-900
        "
      >

        <img
          src={person.image}
          alt={person.actor}
          className="
            w-full
            h-[180px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
          "
        />

      </div>

      {/* INFO */}
      <div className="mt-4">

        {/* ACTOR NAME */}
        <h3
          className="
            text-white
            text-sm
            font-semibold
            leading-tight
            group-hover:text-lime-400
            transition-colors
          "
        >
          {person.actor}
        </h3>

        {/* CHARACTER */}
        <p
          className="
            text-lime-400
            text-xs
            uppercase
            tracking-[0.15em]
            mt-2
          "
        >
          {person.character}
        </p>

      </div>

    </article>
  );
}

export default CastCard;