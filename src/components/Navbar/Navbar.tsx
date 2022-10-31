import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import PlanetsData from "../../data/planets.js";

export default function Navbar() {
  return (
    <div className={classes.container}>
      <h1>THE PLANETS</h1>
      <div className={classes.planets}>
        {PlanetsData.map((planet) => {
          return (
            <Link
              key={planet.name}
              className={classes.link}
              to={`/planet/${planet.name}`}
            >
              {planet.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
