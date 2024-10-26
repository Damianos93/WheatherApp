import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/MyContext'
import { Hour } from './Hour'

const Key = "8aca29f934084a69ba663555242510"

export const HourlyForecast = () => {
    const [hourlydata,setHourlyData ] = useState("")
    const { query, setError } = useContext(MyContext)

    useEffect(() => {
        const fetchData = async () => {
            if(!query) return
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${query}&aqi=no`)
                if (!response.ok) {
                    throw new Error("Something went wrong with fetching the hourly data")
                }
                const data = await response.json()
                setHourlyData(data)
            } catch (err) {
                setError(err)
                console.error(err)
            }
        }
        fetchData()
    }, [query])
    return (
        <div>{hourlydata?.forecast?.forecastday?.map((item, index) => (
            <Hour item={item} key={index}/>
            
        ))}</div>
    )
}
