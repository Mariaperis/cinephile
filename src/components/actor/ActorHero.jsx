import {
  FiMapPin,
  FiAward,
} from "react-icons/fi";

function ActorHero({ actor }) {

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-zinc-900
        bg-[#080808]
      "
    >

      {/* IMAGE */}
      <div className="relative h-[820px]">

        <img
          src={actor.image}
          alt={actor.name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/20
            via-black/40
            to-[#050505]
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#9EFF0010,transparent_60%)]
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-end
            h-full
            p-8
          "
        >

          {/* LABEL */}
          <span
            className="
              text-yellow-400
              uppercase
              tracking-[0.3em]
              text-xs
              font-medium
            "
          >
            Master of the Craft
          </span>

          {/* NAME */}
          <h1
            className="
              text-white
              text-6xl
              font-bold
              mt-5
              leading-none
            "
          >
            {actor.name}
          </h1>

          {/* META */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-6
            "
          >

            {/* AGE */}
            <div
              className="
                px-4
                py-2
                rounded-full
                bg-black/40
                backdrop-blur-md
                border
                border-zinc-700
                text-white
                text-sm
              "
            >
              {actor.age} Years Old
            </div>

            {/* LOCATION */}
            <div
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-black/40
                backdrop-blur-md
                border
                border-zinc-700
                text-white
                text-sm
              "
            >

              <FiMapPin size={14} />

              {actor.location}

            </div>

          </div>

        </div>

      </div>

      {/* BIO SECTION */}
      <div className="p-8">

        {/* TITLE */}
        <h2
          className="
            text-white
            text-4xl
            font-bold
          "
        >
          The Cinematic Journey
        </h2>

        {/* BIO */}
        <p
          className="
            text-zinc-300
            text-lg
            leading-relaxed
            mt-6
          "
        >
          {actor.biography}
        </p>

        {/* QUOTE */}
        <blockquote
          className="
            mt-8
            border-l-4
            border-lime-400
            pl-5
            italic
            text-zinc-400
            leading-relaxed
          "
        >
          "I don't just play a role. I inhabit the silence between the lines."
        </blockquote>

        {/* ACCOLADES */}
        <div
          className="
            mt-10
            rounded-[1.5rem]
            border
            border-zinc-800
            bg-[#111111]
            p-6
          "
        >

          {/* HEADER */}
          <div
            className="
              flex
              items-center
              gap-3
              mb-5
            "
          >

            <FiAward
              size={20}
              className="text-yellow-400"
            />

            <h3
              className="
                text-white
                text-xl
                font-semibold
              "
            >
              Accolades
            </h3>

          </div>

          {/* LIST */}
          <div className="space-y-4">

            {actor.accolades.map((award) => (

              <div
                key={award}
                className="
                  flex
                  items-center
                  gap-3
                  text-zinc-300
                "
              >

                <span className="text-yellow-400">
                  ✦
                </span>

                <span>{award}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ActorHero;