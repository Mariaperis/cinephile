function Loader() {

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        min-h-[250px]
        gap-6
      "
    >

      {/* SPINNER */}
      <div
        className="
          w-14
          h-14
          rounded-full
          border-4
          border-zinc-800
          border-t-lime-400
          animate-spin
        "
      />

      {/* TEXT */}
      <p
        className="
          text-zinc-500
          tracking-wide
          uppercase
          text-sm
        "
      >
        Loading cinematic experience...
      </p>

    </div>
  );
}

export default Loader;