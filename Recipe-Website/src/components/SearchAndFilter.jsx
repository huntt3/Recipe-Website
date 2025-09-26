import { useState, useEffect } from "react";

const SearchAndFilter = ({ onSearchChange, onFilterChange, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [recipeTypes, setRecipeTypes] = useState(["All"]);

  useEffect(() => {
    // Load recipe types from JSON file for filter options
    const loadRecipeTypes = async () => {
      try {
        const response = await fetch("/recipes.json");
        const data = await response.json();
        const types = [
          ...new Set(data.Recipes?.map((recipe) => recipe.type) || []),
        ];
        setRecipeTypes(["All", ...types]);
      } catch (error) {
        console.error("Error loading recipe types:", error);
      }
    };

    loadRecipeTypes();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterType(value);
    onFilterChange(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6 shadow-sm no-print">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Bar */}
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search Recipes
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name or ingredient..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Filter by Type */}
        <div>
          <label
            htmlFor="filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter by Type
          </label>
          <select
            id="filter"
            value={filterType}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {recipeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Sort by
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Name (A-Z)</option>
            <option value="type">Type</option>
            <option value="cookTime">Cook Time</option>
          </select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {searchTerm && <span>Searching for "{searchTerm}" • </span>}
          {filterType !== "All" && <span>Filtered by {filterType} • </span>}
          Sorted by{" "}
          {sortBy === "name"
            ? "Name"
            : sortBy === "type"
            ? "Type"
            : "Cook Time"}
        </p>
      </div>
    </div>
  );
};

export default SearchAndFilter;
