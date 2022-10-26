import classes from "./PlanetFact.module.scss";
import Overview from "./PlanetFactContent/Overview";
import InternalStructure from "./PlanetFactContent/InternalStructure";
import SurfaceGeology from "./PlanetFactContent/SurfaceGeology";
import { PlanetsContext } from "../../context/context-api";
import {useContext} from 'react'

export default function PlanetFactPage() {

  const {overview, internal, surface} = useContext(PlanetsContext)
  
  return (
    <div className={classes.container}>
      {overview && <Overview />}
      {internal && <InternalStructure />}
      {surface && <SurfaceGeology />}

      
    </div>
  );
}
