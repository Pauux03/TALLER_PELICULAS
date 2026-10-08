import { useState } from "react";
import "./App.css";
import movies from "./data/movies";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const initialFilters = {
  genre: "all",
  year: "all",
  minRating: 0,
  onlyFavorites: false,
};

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  const visibleMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase().trim());
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorite;
  });

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  const changeFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    setQuery("");
    setFilters(initialFilters);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const rateMovie = (id, stars) => {
    setRatings({ ...ratings, [id]: stars });
  };

  return (
    <div className="app">
      <Header
        query={query}
        onQueryChange={setQuery}
        favoritesCount={favorites.length}
      />

      <main className="main">
        <Filters
          movies={movies}
          filters={filters}
          onChange={changeFilter}
        />

        <p className="results-count">
          {visibleMovies.length} de {movies.length} películas
        </p>

        <MovieList
          movies={visibleMovies}
          favorites={favorites}
          ratings={ratings}
          onSelect={setSelectedId}
          onToggleFavorite={toggleFavorite}
          onClear={clearFilters}
        />

        <Favorites
          movies={favoriteMovies}
          onSelect={setSelectedId}
          onRemove={toggleFavorite}
        />
      </main>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] || 0}
          onClose={() => setSelectedId(null)}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
        />
      )}
    </div>
  );
}

export default App;