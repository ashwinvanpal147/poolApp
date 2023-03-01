import "./App.css";
import Button from "./components/Button";
import React, { useState } from "react";
import PoolHallForm from "./components/PoolHallForm";
import PoolHallsList from "./components/PoolHallsList";
function App() {
  const [isEnterPoolHallInfoIsPressed, setIsEnterPoolHallInfoIsPressed] =
    useState(false);

  const [isFindPoolHallIsPressed, setIsFindPoolHallIsPressed] = useState(false);
  const [bodyRec, setBodyRec] = useState([]);

  const whenEnterPoolHallInfoIsPressed = (isPressed) => {
    setIsEnterPoolHallInfoIsPressed(isPressed);
  };

  const whenFindPoolHallIsPressed = (isPressed) => {
    fetchFromBackend();
    setIsFindPoolHallIsPressed(isPressed);
  };

  const cancelHandler = (isPressed) => {
    setIsEnterPoolHallInfoIsPressed(!isPressed);
    setIsFindPoolHallIsPressed(!isPressed);
  };

  const fetchFromBackend = () => {
    fetch("http://localhost:8080/poolhall")
      .then((response) => {
        return response.json();
      })
      .then((poolHalls) => {
        const result = poolHalls.list.map((poolHall) => {
          return {
            id: poolHall.name,
            name: poolHall.name,
            address: poolHall.address,
            numberOfTables: poolHall.numberOfTables,
          };
        });
        //console.log(result);
        setBodyRec(result);
      });
  };

  const enterPoolHall = (
    <div className="Landing">
      {!isEnterPoolHallInfoIsPressed && !isFindPoolHallIsPressed && (
        <div>
          <Button
            name="Enter Pool Hall Info"
            whenPressed={whenEnterPoolHallInfoIsPressed}
          ></Button>
          <Button
            name="Find Registered Pool Halls"
            whenPressed={whenFindPoolHallIsPressed}
          ></Button>
        </div>
      )}
      {isEnterPoolHallInfoIsPressed && (
        <div>
          <h2>Enter Pool Hall information </h2>
          <Button name="Back" whenPressed={cancelHandler}></Button>
          <br></br>
          <br></br>
          <PoolHallForm whenCancelIsPressed={setIsEnterPoolHallInfoIsPressed} />
        </div>
      )}
      {isFindPoolHallIsPressed && (
        <div>
          <Button name="Back" whenPressed={cancelHandler}></Button>
          <PoolHallsList poolhalls={bodyRec} />
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Pool App</h1>
      </header>
      {enterPoolHall}
    </div>
  );
}

export default App;
