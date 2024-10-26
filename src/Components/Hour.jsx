import React from 'react'
import { HourlyItem } from './HourlyItem'

export const Hour = ({item}) => {
  return (
    <div>
      The Wheather in the next 10 hours 
        <div className='grid grid-flow-col grid-cols-10 grid-rows-3 gap-4'>{item.hour.slice(0, 10).map((hourlyItem,index)=>(
          <HourlyItem hourlyItem={hourlyItem} key={index}/>
        ))}</div>
   
    </div>
  )
}
