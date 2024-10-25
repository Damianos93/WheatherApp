import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export const TenDayForecast = () => {
    const {data,apiRequest} = useContext(MyContext)

  return (
    <div>TenDayForecast</div>
  )
}
