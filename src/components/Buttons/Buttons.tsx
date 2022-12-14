import classes from "./Buttons.module.scss";
import { Props } from "./types";


export default function Buttons({
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
          backgroundColor: activeButton === "Internal Structure" ? color : "",
          border: activeButton === "Internal Structure" ? "none" : "",
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
        Internal Structure
      </button>
      <button
        style={{
          backgroundColor: activeButton === "Surface Geology" ? color : "",
          border: activeButton === "Surface Geology" ? "none" : "",
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
        Surface Geology
      </button>
    </div>
  );
}
