import React from "react";
import {useParams} from 'react-router-dom'
import planetsData from '../data/planets.json'

export default function PlanetFact() {

    const { planetFact }= useParams();



  return (
    <div>
      <div className="mainInfo"></div>
      <div className="planetDetail"></div>
    </div>
  );
}
