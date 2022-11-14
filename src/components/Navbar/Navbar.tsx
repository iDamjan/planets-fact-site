import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import PlanetsData from "../../data/planets.js";
import { useState } from "react";
import PlanetOptionsMobile from "./PlanetOptionsMobile/PlanetOptionsMobile";

export default function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  const burgerMenuHandler = () => {
    setBurgerMenu((prev) => !prev);
  };
  
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
      <div onClick={burgerMenuHandler} className={classes.burgerIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </div>
      {burgerMenu && <PlanetOptionsMobile setBurgerMenu = {setBurgerMenu} burgerMenu = {burgerMenu} />}
    </div>
  );
}
