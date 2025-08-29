import { useState } from "react";
import Adventure from "../../Global/Advanture";

export default function AdventureSearch({ onSearch }) {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSuggestion([]);
      onSearch(""); // 🔹 clear filters → show all
      return;
    }

    const filtered = Adventure.filter(
      (item) =>
        item?.location &&
        item.location.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestion(filtered);
  };

  const handleSearchClick = (item) => {
    setSearch(item.location);
    setSuggestion([]);
    onSearch(item.location); // 🔹 filter by clicked suggestion
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (search.trim() === "") {
        onSearch(""); // 🔹 blank → clear filters
      } else if (suggestion.length > 0) {
        handleSearchClick(suggestion[0]); // 🔹 pick first suggestion
      } else {
        onSearch(search); // 🔹 filter whatever user typed
      }
    }
  };

  return (
    <div className="relative w-full sm:w-72">
      <input
        type="text"
        placeholder="Search adventure tours..."
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
      />

      {suggestion.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
          {suggestion.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSearchClick(item)}
              className="px-3 py-2 hover:bg-orange-100 cursor-pointer flex justify-between"
            >
              <span className="text-black">{item.location}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
