function Filters({ movies, filters, onChange }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const years = [...new Set(movies.map((movie) => movie.year))].sort((a, b) => b - a);
  const ratingOptions = [7, 8, 8.5, 9];

  return (
    <section className="filters">
      <select
        className="filter-select"
        value={filters.genre}
        onChange={(event) => onChange("genre", event.target.value)}
      >
        <option value="all">Género</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        className="filter-select"
        value={filters.year}
        onChange={(event) => onChange("year", event.target.value)}
      >
        <option value="all">Años</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        className="filter-select"
        value={filters.minRating}
        onChange={(event) => onChange("minRating", Number(event.target.value))}
      >
        <option value={0}>Calificación</option>
        {ratingOptions.map((rating) => (
          <option key={rating} value={rating}>
            {rating} o más
          </option>
        ))}
      </select>

      <label className="check">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(event) => onChange("onlyFavorites", event.target.checked)}
        />
        Solo favoritas
      </label>
    </section>
  );
}

export default Filters;