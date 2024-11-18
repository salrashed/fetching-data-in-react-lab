import React, { useState } from 'react';

const StarshipSearch = (props) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    const handleSearch = () => {
        props.onSearch(query);
    };
    return (
        <div>
            <input type="text" 
            value={query} 
            onChange={handleInputChange} 
            placeholder="Search Starships" />
            <button onClick={handleSearch}></button>
    </div>
  );
};

export default StarshipSearch;
    