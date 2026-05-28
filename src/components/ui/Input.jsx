function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error = "",
  icon = null,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-2">
      
      {/* LABEL */}
      {label && (
        <label
          className="
            text-sm
            font-medium
            text-zinc-300
          "
        >
          {label}
        </label>
      )}

      {/* INPUT WRAPPER */}
      <div className="relative">
        
        {/* ICON */}
        {icon && (
          <div
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              text-lg
              pointer-events-none
            "
          >
            {icon}
          </div>
        )}

        {/* INPUT */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full
            h-14
            rounded-2xl
            border
            bg-[#0D0D0D]
            text-white
            placeholder:text-zinc-500
            transition-all
            duration-300
            outline-none
            px-5
            ${
              icon ? "pl-12" : ""
            }
            ${
              error
                ? `
                  border-red-500
                  focus:border-red-400
                  focus:ring-2
                  focus:ring-red-500/20
                `
                : `
                  border-zinc-800
                  focus:border-lime-400/50
                  focus:ring-2
                  focus:ring-lime-400/10
                `
            }
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : ""
            }
          `}
        />

        {/* INPUT GLOW */}
        {!error && (
          <div
            className="
              absolute
              inset-0
              rounded-2xl
              pointer-events-none
              opacity-0
              focus-within:opacity-100
              transition-opacity
              duration-300
              shadow-[0_0_30px_rgba(158,255,0,0.08)]
            "
          />
        )}
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <span
          className="
            text-sm
            text-red-400
            mt-1
          "
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;