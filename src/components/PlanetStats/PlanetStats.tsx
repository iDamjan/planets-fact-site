import React from "react";
import PlanetStat from "./PlanetStat";
import classes from './PlanetStats.module.scss'
import planetsData from "../../data/planets";
import { useParams } from "react-router-dom";

export default function PlanetStats() {

  const {planetName} = useParams();
  const planet = planetsData.find((planet) => planet.name === planetName);
  

  if (!planet) return <></>;

  return (
    <div className={classes.container}>
      <PlanetStat statName = "ROTATION" stat = {planet?.rotation}/>
      <PlanetStat statName = "TEMPERATURE" stat = {planet?.temperature} />
      <PlanetStat statName = "REVOLUTION" stat = {planet?.revolution} />
      <PlanetStat statName = "RADIUS" stat = {planet?.radius}/>
    </div>
  );
}
