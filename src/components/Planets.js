import React, { useState, useEffect } from "react";

const url = 'https://swapi.dev/api/planets/';

const PlanetName = () => {
  const [names, setNames] = useState([]);

  const getNames = async () => {
    const response = await fetch(url)
    const names = await response.json();
    setNames(names.results);
    console.log(names);
  }

  useEffect(() => {
    getNames();
  }, []);

  return (
    <div>
      <p> Testing </p>
      <ul className="names">
        {names.map((results) => {
          const { name } = results;
          return (
            <li key={name}>
              <p> {name} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default PlanetName;





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

/*
export default class Character extends React.Component {
  state = {
    loading: true,
    character: null
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/people"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ character: data.results[0], loading: false });
    console.log("");
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.character) {
      return <div>didn't get a character</div>;
    }

    return (
      <div>
        <div>{this.state.character.name}</div>
      </div>
    );
  }
} */