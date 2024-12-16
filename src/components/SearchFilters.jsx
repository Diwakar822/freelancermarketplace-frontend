import React,{useState} from 'react';

const SearchFilters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        category: "",
        budget: "",
        rating: "",
      });
    
      const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
        onFilterChange({ ...filters, [e.target.name]: e.target.value });
      };
    return (
        <div>
              <select name="category" value={filters.category} onChange={handleInputChange}>
        <option value="">Category</option>
        <option value="development">Development</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
      </select>
      <input
        type="number"
        name="budget"
        placeholder="Max Budget"
        value={filters.budget}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Min Rating"
        value={filters.rating}
        onChange={handleInputChange}
      />

      <button type='submit'>sumbit</button>
        </div>
    );
};

export default SearchFilters;