/* 
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './app.css';
import { Dropdown, Card } from 'flowbite-react'

const App = () => {
  const [characterName, setCharacterName] = useState([]);
  const [planetName, setPlanetName] = useState([]);
  const [visible, setVisible] = useState([]);

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

  const onClickHandler = () => {
    setPlanetName();
    console.log(setPlanetName)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const renderCard = (result, index) => {
    return (
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {result.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {result.hometown}
        </p>
      </Card>
    )
  }

  return (
    <div className="w-screen text-center m-auto">
      <div className="p-4 bg-gray-300">
        <p className="text-3xl"> Star Wars Comparison </p>
      </div>
      <div className="max-w-2xl grid grid-cols-2 m-auto gap-60 pt-10">
        <div>
          <Dropdown
            label="Select Character"
            dismissOnClick={true}
          >
            <ul>
              {characterName.map((results) => {
                const { name } = results;
                return (
                  <li key={name.id}>
                    <button onClick={onClickHandler} className="w-48 hover:bg-gray-200"> {name} </button>
                  </li>
                )
              })}
            </ul>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            label="Select Character"
            dismissOnClick={true}
          >
            <ul>
              {characterName.map((results) => {
                const { name } = results;
                return (
                  <li key={name.id}>
                    <button className="w-48 hover:bg-gray-200"> {name} </button>
                  </li>
                )
              })}
            </ul>
          </Dropdown>
        </div>
      </div>
      <div>
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