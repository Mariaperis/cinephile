function Divider({ text = "o continúa con" }) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        my-6
      "
    >
      {/* LEFT LINE */}
      <div
        className="
          flex-1
          h-px
          bg-gradient-to-r
          from-transparent
          via-zinc-700
          to-zinc-800
        "
      />

      {/* TEXT */}
      <span
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-500
          whitespace-nowrap
        "
      >
        {text}
      </span>

      {/* RIGHT LINE */}
      <div
        className="
          flex-1
          h-px
          bg-gradient-to-l
          from-transparent
          via-zinc-700
          to-zinc-800
        "
      />
    </div>
  );
}

export default Divider;