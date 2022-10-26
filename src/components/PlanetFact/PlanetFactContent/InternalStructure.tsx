import { useParams } from 'react-router-dom';
import planetsData from "../../../data/planets";
import classes from "./content.module.scss";
import Buttons from "../Buttons/Buttons";
export default function InternalStructure() {

  
    const { planetName } = useParams();

    const currentPlanet = planetsData.find(
    (planet) => planet.name === planetName
    );

  //   console.log(currentPlanet?.images.planet); // podobro objasnuvanje za prasalnikot i izvicnikot -
  return (
    <div>
      <div className={classes.container}>
        <img src={currentPlanet!.images.internal} alt={currentPlanet!.name} />
        <div className={classes.mainInfo}>
          <h1>{currentPlanet!.name}</h1>
          <p>{currentPlanet!.structure.content}</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
