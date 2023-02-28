import "./PoolHallForm.css";
import Button from "./Button";
import React, { useState } from "react";
const PoolHallForm = (props) => {
  const [poolHallName, setPoolHallName] = useState("");
  const [poolHallAddress, setPoolHallAddress] = useState("");
  const [numberOfTables, setNumberOfTablesHandler] = useState(0);

  const submitHandler = (event) => {
    console.log(poolHallName);
    console.log(poolHallAddress);
    console.log(numberOfTables);
    props.whenCancelIsPressed(false);
  };

  const poolHallNameHandler = (event) => {
    setPoolHallName(event.target.value);
  };

  const poolHallAddressHandler = (event) => {
    setPoolHallAddress(event.target.value);
  };

  const numberOfTablesHandler = (event) => {
    setNumberOfTablesHandler(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" onChange={poolHallNameHandler}></input>
      <br></br>
      <label for="poolHallAddress">Address</label>
      <input type="text" onChange={poolHallAddressHandler}></input>
      <br></br>
      <label for="numberOfTables">Number of Tables</label>
      <input type="number" onChange={numberOfTablesHandler}></input>
      <br></br>
      <br></br>
      <Button name="Submit" whenPressed={submitHandler}></Button>
    </form>
  );
};

export default PoolHallForm;
