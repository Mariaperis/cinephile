import {
  FiEdit2,
  FiCamera,
} from "react-icons/fi";

function ProfileHero({ user }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-zinc-900
        bg-[#111111]
        p-8
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#9EFF0015,transparent_60%)]
        "
      />

      {/* DECORATIVE BLUR */}
      <div
        className="
          absolute
          -top-10
          right-0
          w-40
          h-40
          rounded-full
          bg-lime-400/10
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* AVATAR CONTAINER */}
        <div className="relative">

          {/* AVATAR */}
          <div
            className="
              w-36
              h-36
              rounded-[2rem]
              overflow-hidden
              border-2
              border-lime-400
              shadow-[0_0_40px_rgba(158,255,0,0.15)]
            "
          >

            <img
              src={user.avatar}
              alt={user.username}
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          {/* EDIT BUTTON */}
          <button
            className="
              absolute
              bottom-2
              right-2
              w-10
              h-10
              rounded-full
              bg-lime-400
              text-black
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              transition-transform
            "
          >

            <FiCamera size={18} />

          </button>

        </div>

        {/* USERNAME */}
        <h1
          className="
            text-white
            text-5xl
            font-bold
            mt-8
          "
        >
          {user.username}
        </h1>

        {/* BIO */}
        <p
          className="
            text-zinc-400
            text-lg
            mt-4
            max-w-[500px]
          "
        >
          {user.bio}
        </p>

        {/* EDIT PROFILE */}
        <button
          className="
            mt-8
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-2xl
            border
            border-zinc-700
            bg-black/30
            text-white
            hover:border-lime-400/40
            transition-all
            duration-300
          "
        >

          <FiEdit2 size={16} />

          Edit Profile

        </button>

      </div>

    </section>
  );
}

export default ProfileHero;