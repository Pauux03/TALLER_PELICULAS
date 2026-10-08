function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <svg
        className="search-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>

      <input
        className="search-input"
        type="text"
        placeholder="Buscar película..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Borrar búsqueda"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;