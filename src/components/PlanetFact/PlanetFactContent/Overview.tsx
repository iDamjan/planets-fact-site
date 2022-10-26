import classes from "./content.module.scss";
import { useParams } from "react-router-dom";
import planetsData from "../../../data/planets";
import Buttons from "../Buttons/Buttons";
export default function Overview() {
  const { planetName } = useParams();

  const currentPlanet = planetsData.find(
    (planet) => planet.name === planetName
  );
    const currentPlanetImage = currentPlanet?.images.planet
    console.log(currentPlanetImage)

  return (
    <div>
      <div className={classes.container}>
        <img src={currentPlanetImage} alt={currentPlanet!.name} />
        <div className={classes.mainInfo}>
          <h1>{currentPlanet!.name}</h1>
          <p>{currentPlanet!.overview.content}</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
