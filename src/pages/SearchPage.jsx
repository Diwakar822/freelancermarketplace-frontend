import React, { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import JobCard from "../components/JobCard";


const SearchPage = ({ type }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
      const endpoint = type === "services" ? "services" : "jobs";
      fetch(`https://freelancermarkerplace-backend-1.onrender.com/api/${endpoint}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error("Error:", error));
    }, [type]);
    return (
        <div>
             <h1>Search Results</h1>
      {results.length ? (
        results.map((result) =>
          type === "services" ? (
            <ServiceCard key={result.id} service={result} />
          ) : (
            <JobCard key={result.id} job={result} />
            
          )
        )
      ) : (

        <p>No results found.</p>
      )}
       
        </div>
    );
};

export default SearchPage;