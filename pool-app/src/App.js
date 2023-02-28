import "./App.css";
import Button from "./components/Button";
import React, { useState } from "react";
import PoolHallForm from "./components/PoolHallForm";
function App() {
  const [isEnterPoolHallInfoIsPressed, setIsEnterPoolHallInfoIsPressed] =
    useState(false);

  const [isFindPoolHallIsPressed, setIsFindPoolHallIsPressed] = useState(false);

  const whenEnterPoolHallInfoIsPressed = (isPressed) => {
    setIsEnterPoolHallInfoIsPressed(isPressed);
  };

  const whenFindPoolHallIsPressed = (isPressed) => {
    setIsFindPoolHallIsPressed(isPressed);
  };

  const cancelHandler = (isPressed) => {
    setIsEnterPoolHallInfoIsPressed(!isPressed);
    setIsFindPoolHallIsPressed(!isPressed);
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
          <h2>No Pool Hall Found </h2>
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
