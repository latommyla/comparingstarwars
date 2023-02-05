/*import React, { useState, useEffect } from "react";
import axios from 'axios'

/* const url = 'https://swapi.dev/api/people'; */
/*
const CharacterName = () => {
  const [characterName, setCharacterName] = useState([]);
  const [planetName, setPlanetName] = useState([]);

  const fetchData = () => {
    const peopleAPI = 'https://swapi.dev/api/people'
    const planetAPI = 'https://swapi.dev/api/planets';

    const getPeopleAPI = axios.get(peopleAPI)
    const getPlanetAPI = axios.get(planetAPI)
    axios.all([getPeopleAPI, getPlanetAPI]).then(
      axios.spread((...data) => {
        const allDataPeople = data[0].data.results
        const allDataPlanet = data[1].data.results

        setCharacterName(allDataPeople)
        setPlanetName(allDataPlanet)

        console.log(allDataPeople)
        console.log(allDataPlanet)
      })
    )
  }

  /*
  const getNames = async () => {
    const response = await fetch(url)
    const names = await response.json();
    setNames(names.results);
    console.log(names);
  }
  */

  /*
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <p> Testing </p>
      <ul className="names">
        {names.map((results) => {
          const { characterName, planetName } = results;
          return (
            <li key={characterName}>
              <p> {characterName} </p>
              <p> {planetName} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default CharacterName;





/*
  return (
    <div>
      <p> Testing </p>
      <ul className="names">
        {names.map((results) => {
          const { name, homeworld, vehicles, starships } = results;
          return (
            <li key={name}>
              <p> {name} </p>
              <p> {homeworld} </p>
              <p> {vehicles} </p>
              <p> {starships} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
};
*/