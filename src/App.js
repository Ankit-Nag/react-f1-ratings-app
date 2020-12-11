import React, { useState } from "react";
import "./styles.css";

//create a dictionary
const formulaDictionary = {
  //teams
  teams: [
    {
      name: "Mercedes-AMG Petronas F1 Team",
      rating: "Rating: 9.5/10",
      base: "Brackley, United Kingdom"
    },
    {
      name: "Aston Martin Red Bull Racing",
      rating: "Rating: 8/10",
      base: "Milton Keynes, United Kingdom"
    },
    {
      name: "BWT Racing Point F1 Team",
      rating: "Rating: 7.5/10",
      base: "Silverstone, United Kingdom"
    },
    {
      name: "McLaren F1 Team",
      rating: "Rating: 7/10",
      base: "Woking, United Kingdom"
    },
    {
      name: "Renault DP World F1 Team",
      rating: "Rating: 7/10",
      base: "Enstone, United Kingdom"
    },
    {
      name: "Scuderia Ferrari Mission Winnow",
      rating: "Rating: 6/10",
      base: "Maranello, Italy"
    },
    {
      name: "Scuderia AlphaTauri Honda",
      rating: "Rating: 5/10",
      base: "Faenza, Italy"
    },
    {
      name: "Alfa Romeo Racing ORLEN",
      rating: "Rating: 3/10",
      base: "Hinwil, Switzerland"
    },
    {
      name: "Haas F1 Team",
      rating: "Rating: 2/10",
      base: "Kannapolis, United States"
    },
    {
      name: "Williams Racing",
      rating: "Rating: 1/10",
      base: "Grove, United Kingdom"
    }
  ],

  //drivers
  drivers: [
    {
      name: "Lewis Hamilton",
      totalPoints: "Total Points: 3763",
      team: "Mercedes-AMG Petronas F1 Team",
      rating: "Rating: 9.5/10"
    },
    {
      name: "Max Verstappen",
      totalPoints: "Total Points: 1137",
      team: "Aston Martin Red Bull Racing",
      rating: "Rating: 9/10"
    },
    {
      name: "Charles Leclerc",
      totalPoints: "Total Points: 401",
      team: "Scuderia Ferrari Mission Winnow",
      rating: "Rating: 9/10"
    },
    {
      name: "Carlos Sainz",
      totalPoints: "Total Points: 364",
      team: "McLaren F1 Team",
      rating: "Rating: 8/10"
    },
    {
      name: "Sergio Perez",
      totalPoints: "Total Points: 706",
      team: "BWT Racing Point F1 Team",
      rating: "Rating: 8/10"
    },
    {
      name: "George Russell",
      totalPoints: "Total Points: 3",
      team: "Williams Racing",
      rating: "Rating: 7.5/10"
    },
    {
      name: "Sebastian Vettel",
      totalPoints: "Total Points: 3018",
      team: "Scuderia Ferrari Mission Winnow",
      rating: "Rating: 7/10"
    },
    {
      name: "Daniel Ricciardo",
      totalPoints: "Total Points: 1152",
      team: "Renault DP World F1 Team",
      rating: "Rating: 7/10"
    },
    {
      name: "Valtteri Bottas",
      totalPoints: "Total Points: 1494",
      team: "Mercedes-AMG Petronas F1 Team",
      rating: "Rating: 7/10"
    },
    {
      name: "Lando Norris",
      totalPoints: "Total Points: 136",
      team: "McLaren F1 Team",
      rating: "Rating: 7/10"
    },
    {
      name: "Kimi Raikkonen",
      totalPoints: "Total Points: 1863",
      team: "Alfa Romeo Racing ORLEN",
      rating: "Rating: 7/10"
    },
    {
      name: "Pierre Gasly",
      totalPoints: "Total Points: 195",
      team: "Scuderia AlphaTauri Honda",
      rating: "Rating: 6/10"
    },
    {
      name: "Alexander Albon",
      totalPoints: "Total Points: 185",
      team: "Aston Martin Red Bull Racing",
      rating: "Rating: 6/10"
    },
    {
      name: "Daniil Kvyat",
      totalPoints: "Total Points: 202",
      team: "Scuderia AlphaTauri Honda",
      rating: "Rating: 5/10"
    },
    {
      name: "Esteban Ocon",
      totalPoints: "Total Points: 196",
      team: "Renault DP World F1 Team",
      rating: "Rating: 5/10"
    },
    {
      name: "Lance Stroll",
      totalPoints: "Total Points: 141",
      team: "BWT Racing Point F1 Team",
      rating: "Rating: 5/10"
    },
    {
      name: "Antonio Giovinazzi",
      totalPoints: "Total Points: 18",
      team: "Alfa Romeo Racing ORLEN",
      rating: "Rating: 4/10"
    },
    {
      name: "Romain Grosjean",
      totalPoints: "Total Points: 391",
      team: "Haas F1 Team",
      rating: "Rating: 4/10"
    },
    {
      name: "Kevin Magnussen",
      totalPoints: "Total Points: 158",
      team: "Haas F1 Team",
      rating: "Rating: 4/10"
    },
    {
      name: "Nicholas Latifi",
      totalPoints: "Total Points: 0",
      team: "Williams Racing",
      rating: "Rating: 2/10"
    }
  ],

  //circuits
  circuits: [
    { name: "Red Bull Ring", base: "Austria" },
    { name: "Hungaroring", base: "Hungary" },
    { name: "Silverstone", base: "Great Britain" },
    { name: "Circuit de Catalunya", base: "Spain" },
    { name: "Circuit de Spa-Francorchamps", base: "Belgium" },
    { name: "Autodromo di Monza", base: "Italy" },
    { name: "Nurburgring", base: "Germany" },
    { name: "Bahrain International Circuit", base: "Bahrain" },
    { name: "Istanbul Park Circuit", base: "Turkey" },
    { name: "Yas Marina Circuit", base: "Abu Dhabi" }
  ]
};

var formulaOne = Object.keys(formulaDictionary);

export default function App() {
  const [selectedData, setData] = useState("teams");
  function dataClickHandler(data) {
    setData(data);
  }

  return (
    <div className="App">
      <h1 className="heading">My Formula 1 Ratings </h1>
      <p className="subText">
        Check out my list of ratings for the 2020 F1 circuits, drivers and
        teams!
      </p>
      <div className="buttonsDiv">
        {formulaOne.map((data) => (
          <button
            className="selectorButton"
            onClick={() => dataClickHandler(data)}
          >
            {data}
          </button>
        ))}
      </div>
      <hr />

      <div className="listingDiv">
        <ul>
          {formulaDictionary[selectedData].map((dataBlock) => (
            <li key={dataBlock.name} className="dataList">
              <div className="itemName"> {dataBlock.name} </div>
              <div className="itemBase"> {dataBlock.base} </div>
              <div className="itemTeam"> {dataBlock.team} </div>
              <div className="itemTotalPoints"> {dataBlock.totalPoints}</div>
              <div className="itemRatings"> {dataBlock.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
