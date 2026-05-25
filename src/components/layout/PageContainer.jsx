function PageContainer({ children }) {
  return (
    <main
      className="
        relative
        min-h-screen
        bg-[#050505]
        text-white
        overflow-hidden
      "
    >
      {/* GLOBAL CINEMATIC BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#9EFF0010,transparent_35%)]
          pointer-events-none
        "
      />

      {/* SECONDARY GLOW */}
      <div
        className="
          absolute
          top-[30%]
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-lime-400/5
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      {/* PAGE CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-screen-xl
          mx-auto
          px-4
          md:px-6
          lg:px-8
        "
      >
        {children}
      </div>
    </main>
  );
}

export default PageContainer;