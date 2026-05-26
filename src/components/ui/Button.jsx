function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = true,
  icon = null,
  onClick,
}) {

  // BASE STYLES
  const baseStyles = `
    relative
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    font-medium
    transition-all
    duration-300
    overflow-hidden
    active:scale-[0.98]
  `;

  // VARIANTS
  const variants = {
    primary: `
      bg-lime-400
      text-black
      hover:bg-lime-300
      shadow-[0_0_30px_rgba(158,255,0,0.15)]
    `,

    secondary: `
      bg-[#111111]
      border
      border-zinc-800
      text-white
      hover:border-lime-400/40
      hover:bg-zinc-900
    `,

    ghost: `
      bg-transparent
      text-lime-400
      hover:bg-lime-400/10
    `,
  };

  // SIZES
  const sizes = {
    sm: `
      h-10
      px-4
      text-sm
    `,

    md: `
      h-12
      px-6
      text-base
    `,

    lg: `
      h-14
      px-8
      text-lg
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          disabled || loading
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer"
        }
      `}
    >
      {/* GLOW EFFECT */}
      {variant === "primary" && (
        <div
          className="
            absolute
            inset-0
            bg-white/10
            opacity-0
            hover:opacity-100
            transition-opacity
            duration-300
          "
        />
      )}

      {/* CONTENT */}
      <span className="relative z-10 flex items-center gap-2">
        
        {/* ICON */}
        {icon && (
          <span className="text-lg">
            {icon}
          </span>
        )}

        {/* LOADING */}
        {loading ? (
          <span className="animate-pulse">
            Cargando...
          </span>
        ) : (
          children
        )}
      </span>
    </button>
  );
}

export default Button;