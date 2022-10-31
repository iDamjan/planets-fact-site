import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import planetsData from "../data/planets";
import classes from "./content.module.scss";

type Planet = {
  name: string;
  image: string;
  content: string;
};

export default function PlanetFactPage() {
  const { planetName } = useParams();
  const planet = planetsData.find((planet) => planet.name === planetName);
  const [planetDetails, setPlanetDetails] = useState<Planet | undefined>();

  useEffect(() => {
    if (!planet) return;

    setPlanetDetails({
      name: planet.name,
      image: planet.images.planet,
      content: planet.overview.content,
    });
  }, [planet]);

  const changeContent = (details: Planet) => {
    setPlanetDetails(details);
  };

  if (!planet || !planetDetails) return <></>;

  const renderImages = () => {
    const rule = planetDetails.image === planet.images.geology;
    if (!rule) {
      return (
        <img
          src={process.env.PUBLIC_URL + planetDetails.image}
          alt={planetDetails.name}
        />
      );
    }

    return (
      <div className={classes.planetImg}>
        <img src={planet.images.planet} alt={planetDetails.name} />
        <div className={classes.geologyImg}>
          <img src={planetDetails.image} alt={planetDetails.name} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={classes.container}>
        {renderImages()}
        <div className={classes.mainInfo}>
          <h1>{planetDetails.name}</h1>
          <p>{planetDetails.content}</p>

          <div className={classes.buttons}>
            <button
              onClick={() =>
                changeContent({
                  name: planet.name,
                  image: planet.images.planet,
                  content: planet.overview.content,
                })
              }
            >
              Overview
            </button>
            <button
              onClick={() =>
                changeContent({
                  name: planet.name,
                  image: planet.images.internal,
                  content: planet.structure.content,
                })
              }
            >
              Internal Structure
            </button>
            <button
              onClick={() =>
                changeContent({
                  name: planet.name,
                  image: planet.images.geology,
                  content: planet.geology.content,
                })
              }
            >
              Surface Geology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
