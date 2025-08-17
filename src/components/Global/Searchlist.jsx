import React, { useState } from 'react'
import { BigsamplePackages } from './sampleData'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Searchlist = () => {
  const [search, setSearch] = useState("");
  const [tours] = useState(BigsamplePackages);
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSuggestion([]);
      return;
    }

    const uniqueValue = [
      ...new Set(
        tours
          .map((m) => m.name)
          .filter((name) => name.toLowerCase().startsWith(value.toLowerCase()))
      )
    ];
    setSuggestion(uniqueValue);
  }

  const handleSearchClick = (name) => {
    setSearch(name);
    setSuggestion([]);
    navigate(`/tours?search=${encodeURIComponent(name)}`);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/tours?search=${encodeURIComponent(search)}`);
    }
  }

  return (
    <>
      {/* Parent container is relative */}
      <div className="flex-1 max-w-xs sm:max-w-md relative z-50">
        <label htmlFor="search">
          <FaSearch className="absolute left-4 top-3 text-gray-400" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search packages..."
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="  w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-sm outline-none focus:ring-2 focus:ring-orange-500 shadow-sm text-sm sm:text-base "
        />

        {/* Suggestion list ab same container me aa raha hai */}
        {suggestion.length > 0 && (
          <ul className="absolute top-full mt-1 left-0 w-full border rounded-2xl bg-white shadow-md z-50">
            {suggestion.map((name, i) => (
              <li
                key={i}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                onClick={() => handleSearchClick(name)}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Searchlist
