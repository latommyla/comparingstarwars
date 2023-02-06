import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";
import { Dropdown, Card, Accordion, Button } from "flowbite-react";

const App = () => {
  const [characterName, setCharacterName] = useState([]);
  const [planetName, setPlanetName] = useState([]);
  const [starshipName, setStarshipName] = useState([]);
  const [vehicleName, setVehicleName] = useState([]);

  const fetchData = () => {
    const peopleAPI = "https://swapi.dev/api/people";
    const planetAPI = "https://swapi.dev/api/planets";
    const starshipAPI = "https://swapi.dev/api/starships";
    const vehicleAPI = "https://swapi.dev/api/vehicles";

    const getPeopleAPI = axios.get(peopleAPI);
    const getPlanetAPI = axios.get(planetAPI);
    const getStarshipAPI = axios.get(starshipAPI);
    const getVehicleAPI = axios.get(vehicleAPI);
    axios.all([getPeopleAPI, getPlanetAPI, getStarshipAPI, getVehicleAPI]).then(
      axios.spread((...data) => {
        const allDataPeople = data[0].data.results;
        const allDataPlanet = data[1].data.results;
        const allDataStarship = data[2].data.results;
        const allDataVehicle = data[3].data.results;

        setCharacterName(allDataPeople);
        setPlanetName(allDataPlanet);
        setStarshipName(allDataStarship);
        setVehicleName(allDataVehicle);

        console.log(allDataPeople);
        console.log(allDataPlanet);
        console.log(allDataStarship);
        console.log(allDataVehicle);
      })
    );
  };

  const onClickHandler = () => {
    setPlanetName();
    setStarshipName();
    console.log(setPlanetName);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    );
  };

  return (
    <div className="h-screen w-screen text-center m-auto">
      <div className="p-2 bg-gray-300 bg-opacity-30">
        <a href="/">
          <img
            className="w-40 m-auto"
            src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
          />
        </a>
      </div>
      <div class="m-2 mt-4 max-w-2xl sm:m-auto text-left bg-white sm:mt-10">
        <Accordion
          alwaysOpen={true}
          flush={true}
          collapseAll={true}
          className="rounded-lg"
        >
          <Accordion.Panel>
            <Accordion.Title className="text-gray-600">
              What is this app?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-600">
                Star Wars comparison is an application comparing Star Wars
                characters if, they've shared a specific planet, starship or
                vehicle before.
              </p>
              <p className="text-gray-600">
                <i>
                  "The Star Wars API, or "swapi" (Swah-pee) is the world's first
                  quantified and programmatically-accessible data source for all
                  the data from the Star Wars canon universe!"
                </i>
                <div className="pt-4">
                  <a href="https://swapi.dev/" target="_blank">
                    <Button size="xs" className="m-auto">
                      {" "}
                      SWAPI "The Star Wars API"{" "}
                    </Button>
                  </a>
                </div>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="sm:max-w-2xl grid grid-cols-1 sm:grid-cols-2 place-items-center sm:m-auto gap-60 pt-10">
        <div>
          <Dropdown
            label="Select Character"
            dismissOnClick={true}
            className="opacity-90"
            color="warning"
          >
            <ul>
              {characterName.map((results) => {
                const { name } = results;
                return (
                  <li key={name.id}>
                    <button
                      onClick={planetName}
                      className="w-48 hover:bg-gray-200"
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            label="Select Character"
            dismissOnClick={true}
            className="opacity-80"
            color="warning"
          >
            <ul>
              {characterName.map((results) => {
                const { name } = results;
                return (
                  <li key={name.id}>
                    <button className="w-48 hover:bg-gray-200"> {name} </button>
                  </li>
                );
              })}
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default App;
