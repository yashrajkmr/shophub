// src/components/products/FilterSidebar.tsx
import type { FilterState } from '../../types';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: string[];
}

const FilterSidebar = ({ filters, onFilterChange, categories }: FilterSidebarProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Category</h4>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Price Range</h4>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600">Min Price: ₹{filters.minPrice}</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={filters.minPrice}
              onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Max Price: ₹{filters.maxPrice}</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Sort By</h4>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => onFilterChange({
          category: 'All',
          minPrice: 0,
          maxPrice: 10000,
          searchQuery: '',
          sortBy: 'default'
        })}
        className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;