import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";

function AuthCard() {
  return (
    <section
      className="
        relative
        bg-[#111111]
        border
        border-zinc-800
        rounded-[2rem]
        px-6
        py-8
        shadow-2xl
        backdrop-blur-sm
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-32
          h-32
          bg-lime-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-8">
          <h2
            className="
              text-white
              text-3xl
              font-semibold
              mb-3
              leading-tight
            "
          >
            Bienvenido de nuevo
          </h2>

          <p
            className="
              text-zinc-400
              text-sm
              leading-relaxed
              max-w-[320px]
              mx-auto
            "
          >
            Inicia sesión para acceder a tu biblioteca,
            guardar favoritas y descubrir nuevas películas.
          </p>
        </div>

        {/* LOGIN FORM */}
        <LoginForm />

        {/* SOCIAL LOGIN */}
        <SocialLogin />
      </div>
    </section>
  );
}

export default AuthCard;