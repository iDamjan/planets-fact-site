import React from 'react'
import classes from './MobileButtons.module.scss'
import { Props } from "../types";

export default function MobileButtons({
  activeButton,
  colorChangeHandler,
  changeContent,
  planet,
  color,
}: Props) {
  return (


    <div className={classes.buttons}>
      <button
        style={{
          backgroundColor: activeButton === "Overview" ? color : "",
          border: activeButton === "Overview" ? "none" : "",
        }}
        onClick={(e) => {
          colorChangeHandler(e);
          changeContent({
            name: planet.name,
            image: planet.images.planet,
            content: planet.overview.content,
            source: planet.overview.source
          });
        }}
      >
        Overview
      </button>
      <button
        style={{
          backgroundColor: activeButton === "Structure" ? color : "",
          border: activeButton === "Structure" ? "none" : "",
        }}
        onClick={(e) => {
          colorChangeHandler(e);
          changeContent({
            name: planet.name,
            image: planet.images.internal,
            content: planet.structure.content,
            source: planet.structure.source,
          });
        }}
      >
      Structure
      </button>
      <button
        style={{
          backgroundColor: activeButton === "Geology" ? color : "",
          border: activeButton === "Geology" ? "none" : "",
        }}
        onClick={(e) => {
          colorChangeHandler(e);
          changeContent({
            name: planet.name,
            image: planet.images.geology,
            content: planet.geology.content,
            source: planet.geology.source
          });
        }}
      >
        Geology
      </button>
    </div>
  );
}
