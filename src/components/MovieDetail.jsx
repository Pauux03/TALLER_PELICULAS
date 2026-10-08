import StarRating from "./StarRating";

function MovieDetail({ movie, isFavorite, userRating, onClose, onToggleFavorite, onRate }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="detail" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close" onClick={onClose} aria-label="Cerrar detalle">
          ✕
        </button>

        <img className="detail-img" src={movie.image} alt={`Póster de ${movie.title}`} />

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="card-meta">
            {movie.genre}, {movie.year}
          </p>
          <p className="detail-rating">★ {movie.rating} / 10</p>
          <p>{movie.description}</p>

          <div className="detail-rate">
            <p>Tu calificación</p>
            <StarRating value={userRating} onRate={(stars) => onRate(movie.id, stars)} />
            <p className="muted">
              {userRating > 0 ? `Le diste ${userRating} de 5 estrellas` : "Aún no la has calificado"}
            </p>
          </div>

          <button
            type="button"
            className={isFavorite ? "btn btn-on" : "btn"}
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? "♥ Quitar de favoritas" : "♡ Agregar a favoritas"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;