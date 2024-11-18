import React,  { useState, useEffect } from 'react';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';
import { getAllStarships } from './services/starshipService';


const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await getAllStarships();
        setStarships(data);
        setFilteredStarships(data); 
      } catch (error) {
        console.error('Failed to fetch starships:', error);
      }
    }

    fetchStarships();
  }, []);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredStarships(filtered);
  };

  return (
    <div>
      <h1>Starship Explorer</h1>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </div>
  );
};

export default App;