import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'


export const WheatherToday = () => {
    const { data } = useContext(MyContext)
    return (
        <div>
            <p className='text-xl font-semibold ml-4'>{Math.ceil(data?.current?.temp_c)} Degrees Celsius</p>
            <p className='text-xl font-semibold ml-4'>{data?.current?.feelslike_c} Degrees</p>
            
        </div>
    )
}
