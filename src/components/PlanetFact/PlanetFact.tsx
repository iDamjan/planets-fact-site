
import classes from "./PlanetFact.module.scss";
import Overview from "./PlanetFactContent/Overview";
import InternalStructure from "./PlanetFactContent/InternalStructure";
import SurfaceGeology from "./PlanetFactContent/SurfaceGeology";

export default function PlanetFactPage(){

  // ne mozam da importnam custom button

  return (
    <div>
      <Overview />
      <InternalStructure />
      <SurfaceGeology /> 
      <div className={classes.kopcinja}>
        <button>Overview</button>
        <button>Internal Structure</button>
        <button>Surface Geology</button>
      </div>
    </div>
  );
}
