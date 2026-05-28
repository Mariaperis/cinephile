import actorPlaceholder from "../../assets/posters/actor-placeholder.png";

function CastCard({ person }) {
  const imageUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
    : actorPlaceholder;

  return (
    <article
      className="
        min-w-[120px]
      "
    >
      {/* IMAGE */}
      <div
        className="
          w-[120px]
          h-[160px]
          rounded-2xl
          overflow-hidden
          border
          border-zinc-800
        "
      >
        <img
          src={imageUrl}
          alt={person.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = actorPlaceholder;
          }}
          className="
          w-full
          h-full
          object-cover
          "
        />
      </div>

      {/* INFO */}
      <div className="mt-3">
        <h3
          className="
            text-white
            font-semibold
            text-sm
          "
        >
          {person.name}
        </h3>

        <p
          className="
            text-zinc-500
            text-xs
            mt-1
          "
        >
          {person.character}
        </p>
      </div>
    </article>
  );
}

export default CastCard;
