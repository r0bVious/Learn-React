import "./styles.css";

export default function Search({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="enter city name..."
        name="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
