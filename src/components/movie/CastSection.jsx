import CastCard from "./CastCard";

const cast = [
  {
    id: 1,
    actor: "Elias Thorne",
    character: "Detective Jax",
    image: "/actors/actor1.jpg",
  },

  {
    id: 2,
    actor: "Sasha Grey",
    character: "Elena Vox",
    image: "/actors/actor2.jpg",
  },
];

function CastSection() {
  return (
    <section>

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

      <div
        className="
          flex
          gap-5
          overflow-x-auto
          scrollbar-hide
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