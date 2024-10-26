import React from 'react'

export const HourlyItem = ({ hourlyItem }) => {
    const time = new Date(hourlyItem.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div>
            <img src={hourlyItem.condition.icon} alt="" />
            <p>{hourlyItem.temp_c} Degrees </p>
            {hourlyItem.chance_of_rain > 0 && <p>Chance of rain {hourlyItem.chance_of_rain}</p>}
            <p>{time}</p>
            {hourlyItem.chance_of_snow > 0 && <p>Chance of snow {hourlyItem.chance_of_snow}</p>}
        </div>
    )
}
