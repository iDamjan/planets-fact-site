import React, { useContext } from "react";
import { PlanetsContext } from "../../../context/context-api";
import classes from "./Buttons.module.scss";

export default function Buttons() {
    
  const { overviewHandler, internalHandler, surfaceHandler } =
    useContext(PlanetsContext);
  return (
    <div className={classes.Buttons}>
      <button onClick={overviewHandler}>Overview</button>
      <button onClick={internalHandler}>Internal Structure</button>
      <button onClick={surfaceHandler}>Surface Geology</button>
    </div>
  );
}
