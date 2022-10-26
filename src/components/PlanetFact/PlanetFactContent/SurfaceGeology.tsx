import { useParams } from "react-router-dom";
import planetsData from "../../../data/planets";
import classes from "./content.module.scss";
import Buttons from "../Buttons/Buttons";

export default function SurfaceGeology() {
  const { planetName } = useParams();

  const currentPlanet = planetsData.find(
    (planet) => planet.name === planetName
  );

  //   console.log(currentPlanet?.images.planet); // podobro objasnuvanje za prasalnikot i izvicnikot -
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.planetImg}>
          <img src={currentPlanet!.images.planet} alt={currentPlanet!.name} />
          <div className={classes.geologyImg}>
            <img
              src={currentPlanet!.images.geology}
              alt={currentPlanet!.name}
            />
          </div>
        </div>
        <div className={classes.mainInfo}>
          <h1>{currentPlanet!.name}</h1>
          <p>{currentPlanet!.geology.content}</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
