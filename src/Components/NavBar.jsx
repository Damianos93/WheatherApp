import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export const NavBar = () => {
    const { data } = useContext(MyContext)
    return (
        <div>
            
            <div className='container mx-auto px-4  text-white font-semibold mt-2 '>
                <div>
                    <p>{data.location.localtime}</p>
                    <p >{data?.location?.region}</p>
                </div>
                <p className=' content-center'>{data?.location?.country}</p>

            </div>
            <div>
                <h4 className='text-base font-semibold place-self-center'>The wheather today will be {data?.current?.condition.text.toLowerCase()} <img className='place-self-center' src={data?.current?.condition.icon} alt="Wheather Icon" /></h4>
            </div>
            <div className='ml-4'>
                <p>Right now: {data?.current.condition.text}</p>
                <img src={`//cdn.weatherapi.com/weather/64x64/night/176.png`} alt="" />
                <p>Winds up to {data?.current.wind_kph} KpH</p>
                <p>Gust of winds up to {data?.current?.gust_kph} KpH</p>
            </div>


          
        </div>
    )
}
