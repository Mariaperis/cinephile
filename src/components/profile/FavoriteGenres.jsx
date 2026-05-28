import GenreTag from "../movie/GenreTag";

function FavoriteGenres({
  genres = [
    "Sci-Fi",
    "Noir",
    "Thriller",
    "Cyberpunk",
  ],
}) {
  return (
    <section>

      {/* TITLE */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <h2
          className="
            text-white
            text-3xl
            font-bold
          "
        >
          Favorite Genres
        </h2>

      </div>

      {/* TAGS */}
      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >

        {genres.map((genre) => (

          <GenreTag
            key={genre}
            genre={genre}
          />

        ))}

      </div>

    </section>
  );
}

export default FavoriteGenres;