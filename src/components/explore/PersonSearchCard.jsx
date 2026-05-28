import { useNavigate } from "react-router-dom";

function PersonSearchCard({ person }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/actor/${person.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex-shrink-0
        flex
        flex-col
        items-center
        gap-3
        group
      "
    >

      {/* AVATAR */}
      <div
        className="
          w-20
          h-20
          rounded-2xl
          overflow-hidden
          border
          border-zinc-800
          group-hover:border-lime-400/40
          transition-all
          duration-300
        "
      >
        <img
          src={person.image}
          alt={person.name}
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* NAME */}
      <span
        className="
          text-sm
          text-zinc-300
          max-w-[70px]
          text-center
          leading-tight
          group-hover:text-white
          transition-colors
        "
      >
        {person.name}
      </span>

    </button>
  );
}

export default PersonSearchCard;