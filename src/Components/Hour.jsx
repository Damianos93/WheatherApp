import React from 'react'

export const Hour = ({item}) => {
  return (
    <div>
        <p>{item.date}</p>
        <p>Max Temperature {item.day.maxtemp_c}</p>
        <p>Min Temperature {item.day.mintemp_c}</p>
        <p>Winds of maximum {item.day.maxwind_kph} per hour</p>
        <p>Chance of rain {item.day.daily_chance_of_rain} </p>
    </div>
  )
}
