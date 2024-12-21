import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const SearchFilters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        category: "",
        budget: "",
        rating: "",
      });
     
    
      const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
        // onFilterChange({ ...filters, [e.target.name]: e.target.value });
      };

  
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
              <select className='mb-4 w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' name="category" value={filters.category} onChange={handleInputChange}>
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
        className='mb-4 w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Min Rating"
        value={filters.rating}
        className='mb-4 w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        onChange={handleInputChange}
      />

      <Link to={'/'}><button className='w-64 px-3 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' type='submit'>sumbit</button></Link>
        </div>
    );
};

export default SearchFilters;