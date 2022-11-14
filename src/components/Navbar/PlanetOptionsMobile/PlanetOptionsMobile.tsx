import React from "react";
import classes from "./PlanetOptionsMobile.module.scss";
import PlanetsData from "../../../data/planets.js";
import { Link } from "react-router-dom";

type Props = {
    burgerMenu: boolean,
    setBurgerMenu: any;
}

export default function PlanetOptionsMobile({burgerMenu, setBurgerMenu}:Props) {
  return (
    <div className={classes.burgerMenu}>
      {PlanetsData.map((planet) => {
        return (
          <Link
          
            onClick = {() => setBurgerMenu(false)}
            key={planet.name}
            className={classes.link}
            to={`/planet/${planet.name}`}
          >
            <div className={classes.option}>
              <div className={classes.planetName}>
                <div
                  style={{ backgroundColor: planet.color }}
                  className={classes.circle}
                ></div>
                <p>{planet.name}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
