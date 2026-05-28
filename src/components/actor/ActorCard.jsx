import { useNavigate } from "react-router-dom";

function ActorCard({ actor }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/actor/${actor.id}`);
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
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
        "
      >

        <img
          src={actor.image}
          alt={actor.name}
          className="
            w-full
            h-[180px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* INFO */}
      <div className="mt-3">

        <h3
          className="
            text-white
            font-medium
            group-hover:text-lime-400
            transition-colors
          "
        >
          {actor.name}
        </h3>

        <p
          className="
            text-zinc-500
            text-sm
            mt-1
          "
        >
          {actor.character}
        </p>

      </div>

    </article>
  );
}

export default ActorCard;