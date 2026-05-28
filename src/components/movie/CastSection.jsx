import CastCard from "./CastCard";

function CastSection({
  cast = [],
}) {

  // EMPTY STATE
  if (!cast.length) {
    return null;
  }

  return (
    <section>

      {/* TITLE */}
      <h2
        className="
          text-white
          text-3xl
          font-bold
          mb-6
        "
      >
        Cast
      </h2>

      {/* CAST LIST */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {cast.map((person) => (

          <CastCard
            key={person.id}
            person={person}
          />

        ))}
      </div>

    </section>
  );
}

export default CastSection;