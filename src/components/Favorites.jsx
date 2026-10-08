function Favorites({ movies, onSelect, onRemove }) {
  return (
    <section className="favorites">
      <h2>Mis favoritas</h2>

      {movies.length === 0 ? (
        <p className="muted">
          Todavía no tienes favoritas. Toca el corazón de una película para guardarla aquí.
        </p>
      ) : (
        <ul className="fav-list">
          {movies.map((movie) => (
            <li key={movie.id} className="fav-item">
              <button type="button" className="fav-open" onClick={() => onSelect(movie.id)}>
                <img className="fav-img" src={movie.image} alt={`Póster de ${movie.title}`} />
                <span>{movie.title}</span>
              </button>
              <button
                type="button"
                className="fav-remove"
                onClick={() => onRemove(movie.id)}
                aria-label={`Quitar ${movie.title} de favoritas`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favorites;