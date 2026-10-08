import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, ratings, onSelect, onToggleFavorite, onClear }) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        <p>No encontramos películas con esos criterios.</p>
        <button type="button" className="btn" onClick={onClear}>
          Ver todo el catálogo
        </button>
      </div>
    );
  }

  return (
    <section className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] || 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}

export default MovieList;