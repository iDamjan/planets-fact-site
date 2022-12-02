import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import planetsData from "../../data/planets";
import classes from "./content.module.scss";
import PlanetStats from "../PlanetStats/PlanetStats";
import Buttons from "../Buttons/Buttons";
import { Planet } from "./types";
import SourceIcon from "../../static/icon-source.svg";
import MobileButtons from "../Buttons/MobileButtons/MobileButtons";

export default function PlanetFactPage() {
  const { planetName } = useParams();
  const planet = planetsData.find((planet) => planet.name === planetName);
  const [planetDetails, setPlanetDetails] = useState<Planet | undefined>();
  const [activeButton, setActiveButton] = useState<string>("");
  const [color, setColor] = useState<string>("");

  // BUTTON COLOR CHANGE ON CLICK FUNCTIONALITY
  const colorChangeHandler = (e: any) => {
    setActiveButton(e.target.innerHTML.toString());
  };

  useEffect(() => {
    if (!planet) return;

    setPlanetDetails({
      name: planet.name,
      image: planet.images.planet,
      content: planet.overview.content,
      source: planet.overview.source,
    });

    setColor(planet.color);
    setActiveButton("Overview");
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
        <img src={process.env.PUBLIC_URL + planet.images.planet} alt={planetDetails.name} />
        <div className={classes.geologyImg}>
          <img src={process.env.PUBLIC_URL + planetDetails.image} alt={planetDetails.name} />
        </div>
      </div>
    );
  };


  return (
    <div className={classes.main}>
       <MobileButtons
          activeButton={activeButton}
          changeContent={changeContent}
          colorChangeHandler={colorChangeHandler}
          planet={planet}
          color={color}
        />
      <div className={classes.container}>
       
        {renderImages()}

        <div className={classes.mainInfo}>
          <h1>{planetDetails.name}</h1>
          <p>{planetDetails.content}</p>

          <div className={classes.sourceIcon}>
            <p>Source:</p>
            <a href={planetDetails.source}>Wikipedia</a>
            <img src={SourceIcon} alt="source icon" />
          </div>

          <Buttons
            activeButton={activeButton}
            changeContent={changeContent}
            colorChangeHandler={colorChangeHandler}
            planet={planet}
            color={color}
          />
        </div>
      </div>
      <PlanetStats />
    </div>
  );
}
