import SearchBar from "./SearchBar";

function Header({ query, onQueryChange }) {
  return (
    <header>
      <h1>CineVerse</h1>
      <SearchBar value={query} onChange={onQueryChange} />
    </header>
  );
}
export default Header;