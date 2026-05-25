import loginImage from "../../assets/images/login.png";

function AuthHero() {
  return (
    <section className="relative w-full h-[340px] overflow-hidden rounded-b-[2.5rem]">

      {/* BACKGROUND IMAGE */}
      <img
        src={loginImage}
        alt="Cinematic movies collage"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
      />

      {/* GREEN GLOW */}
      <div
        className="
          absolute
          top-[-40px]
          left-1/2
          -translate-x-1/2
          w-[250px]
          h-[250px]
          bg-lime-400/20
          blur-3xl
          rounded-full
        "
      />

      {/* CINEMATIC GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-[#050505]
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
          px-6
          pb-10
        "
      >
        <span
          className="
            text-lime-400
            uppercase
            tracking-[0.3em]
            text-sm
            font-medium
            mb-3
          "
        >
          Cinephile
        </span>

        <h1
          className="
            text-white
            text-4xl
            leading-tight
            font-semibold
            max-w-[260px]
          "
        >
          Descubre el cine desde otra perspectiva
        </h1>

        <p
          className="
            text-zinc-300
            text-sm
            mt-4
            leading-relaxed
            max-w-[320px]
          "
        >
          Explora películas, actores y directores en una experiencia cinematográfica inmersiva.
        </p>
      </div>
    </section>
  );
}

export default AuthHero;