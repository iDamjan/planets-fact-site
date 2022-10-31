import React from 'react'
import classes from './PlanetStat.module.scss'
type statsType = {
    stat:string
    statName:string
}
export default function (props:statsType) {
  return (
    <div className={classes.container}>
        <p>{props.statName}</p>
        <h2>{props.stat}</h2>
    </div>
  )
}
