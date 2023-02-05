import React, { useState, useEffect } from "react";
import axios from 'axios';
import './app.css';

const App = () => {
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

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div class="flex justify-center">
      <div class="mb-3 xl:w-96">
        <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
          <option selected> Select Character </option>
          <option>
            <ul>
              {characterName.map((results) => {
                const { name } = results;
                return (
                  <li key={name.id}>
                    <button> {name} </button>
                  </li>
                )
              })}
            </ul>
          </option>
        </select>
      </div>
    </div>
  )
};

export default App;

/* 
  return (
    <div>
      <ul>
        {characterName.map((results) => {
          const {name} = results;
          return(
            <li key={name.id}>
              <button> {name} </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
};
*/