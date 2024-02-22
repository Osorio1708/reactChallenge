/**
 *                Cities List
 * Actions to take:
 * - When start the app should load the cities from json file
 * - List all cities
 * - Add new city name from a textfield
 * - Delete city name when you click the name
 * - Validate no repeat city names and display an error message
 * - The way to call JSON with axios is:
 *      axios.get('cities.json')
 *
 * Nice to have:
 *
 * Filter the cities by name
 * Unit tests
 */

import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    axios
      .get("cities.json")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const addCity = () => {
    if (!cityName.trim()) {
      alert("Please enter a city name.");
      return;
    }

    if (
      cities.some((city) => city.name.toLowerCase() === cityName.toLowerCase())
    ) {
      alert("City name already exists.");
      return;
    }

    const newCity = {
      name: cityName,
      id: Math.floor(Math.random() * 101),
    };

    setCities([...cities, newCity]);
    setCityName("");
  };

  const deleteCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Enter a city name"
            value={cityName}
            onChange={handleInputChange}
          />
          <button onClick={addCity}>Add</button>
        </div>
        <div className="filter">
          <input type="text" placeholder="Filter by name" />
        </div>
      </div>
      <hr />
      {cities.map((city) => (
        <p key={city.id} onClick={() => deleteCity(city.id)}>
          {city.name}
        </p>
      ))}
    </div>
  );
};

export default App;
