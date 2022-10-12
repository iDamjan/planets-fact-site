import classes from "./content.module.scss";
import { useParams } from "react-router-dom";
import planetsData from "../../../data/planets.json";


export default function Overview() {
  const { planetName } = useParams();

  const currentPlanet = planetsData.find(
    (planet) => planet.name === planetName
  );

  //   console.log(currentPlanet?.images.planet); // podobro objasnuvanje za prasalnikot i izvicnikot -
  return (
    <div>
      <div className={classes.container}>
        <img src={currentPlanet!.images.planet} alt="planet" />
        <div className={classes.mainInfo}>
          <h1>{currentPlanet!.name}</h1>
          <p>{currentPlanet!.overview.content}</p>
        </div>
      </div>
    </div>
  );
}
