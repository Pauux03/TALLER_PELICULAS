function MovieCard({ movie, isFavorite, userRating, onSelect, onToggleFavorite }) {
  const handleFavorite = (event) => {
    event.stopPropagation();
    onToggleFavorite(movie.id);
  };

  return (
    <article className="card" onClick={() => onSelect(movie.id)}>
      <div className="card-poster">
        <img className="card-img" src={movie.image} alt={`Póster de ${movie.title}`} />

        <button
          type="button"
          className={isFavorite ? "fav-btn fav-btn-on" : "fav-btn"}
          onClick={handleFavorite}
          aria-label={isFavorite ? "Quitar de favoritas" : "Agregar a favoritas"}
        >
          ♥
        </button>

        <span className="badge">★ {movie.rating}</span>
      </div>

      <div className="card-body">
        <h3>{movie.title}</h3>
        <p className="card-meta">
          {movie.genre}, {movie.year}
        </p>
        <p className="card-desc">{movie.description}</p>

        {userRating > 0 && <p className="card-user">Tu nota: {userRating}/5</p>}
      </div>
    </article>
  );
}

export default MovieCard;