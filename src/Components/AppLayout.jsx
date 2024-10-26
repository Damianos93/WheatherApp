import React, { useEffect, useState } from "react"
import { MyContext } from "../context/MyContext"
import { NavBar } from "./NavBar"
import { WheatherToday } from "./WheatherToday"
import { HourlyForecast } from "./HourlyForecast"
import { TenDayForecast } from "./TenDayForecast"





export const AppLayout = () => {

	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [query, setQuery] = useState("")
	const [input, setInput] = useState("")
	const [apiRequest, setApiRequst] = useState("current")

	const Key = "8aca29f934084a69ba663555242510"

	const contextValue = {
		data,
		apiRequest,
		query,
		setError
	}
	const getTime = () => {
		const timeString = data?.location.localtime || ""
		const hourString = timeString.split(" ")[1]?.split(":")[0]
		const hour = parseInt(hourString, 10)

		if (hour >= 5 && hour < 12) {
			return "Morning"
		} else if (hour >= 12 && hour < 17) {
			return "Afternoon"
		} else {
			return "Evening"
		}
	}


	useEffect(() => {
		const fetchData = async () => {
			if(!query) return
			try {
				const response = await fetch(`https://api.weatherapi.com/v1/${apiRequest}.json?key=${Key}&q=${query}&aqi=no`)
				if (!response.ok) {
					throw new Error("Something went wrong with fetching the data")
				}
				const data = await response.json()
				setData(data)
			} catch (err) {
				setError(err)
				console.error(err)
			}
		}
		fetchData()
	}, [query])

	const resetData = () => {
		setInput("")
		setData("")
		setQuery("")
	}

	const handleClick = () => {
		if (!input) return
		setQuery(prev=>prev=input)
	}
	return (
		<>
			{!data && (
				<div>
					<p>What city would you like to see the weather for?</p>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="border p-2 mr-2 "
					/>
					<button
						onClick={handleClick}
						className="rounded-lg border-solid border-2 border-sky-500 bg-gradient-to-r from-blue-400 to-indigo-600 p-1 font-semibold text-white text-lg mt-3 ml-10 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-2xl shadow-lg"
					>
						Search
					</button>
				</div>
			)}
			{data && (
				<div className="container mt-3 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
					<h1 className="text-lg italic font-semibold ml-3">Good {
						getTime() === "Morning" ? "Morning  ☀️" :
							getTime() === "Noon" || getTime() === "Afternoon" ? "Afternoon 🌔" :
								"Evening 🌜"
					} <span className="text-lg">{data ? data.location.name : "Loading"}</span></h1>
					<MyContext.Provider value={contextValue}>
						<NavBar />
						<WheatherToday />
						<HourlyForecast />
						{/* <TenDayForecast /> */}
					</MyContext.Provider>
				</div>
			)}
			{data && <button onClick={resetData} className="rounded-lg border-solid border-2 border-sky-500 bg-gradient-to-r from-blue-400 to-indigo-600 p-1 font-semibold text-white text-lg mt-3 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-2xl shadow-lg">New Search</button>
			}
		</>

	)
}
