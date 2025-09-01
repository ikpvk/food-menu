function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="max-w-2xl mx-auto mb-6 sticky top-4 bg-gray-50 z-10">
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded w-full shadow"
      />
    </div>
  );
}

export default SearchBar;
