import axios from 'axios'
import React, { useState } from 'react'
import Background1 from './assets/bg.jpg'
console.log(process.env.WEATHER_API_KEY)

const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0ec9fa25883363654f8ce959ae101e3a`

  const seearchLocation = async (event) => {
    if (event.key === 'Enter') {
      const getData = await axios.get(url)
      setData(getData.data)
      console.log(getData.data)
    }
  }

  return (
    <div className="w-full h-screen relative px-5 text-white bg-cover">
      <img
        src={Background1}
        className="w-full h-full object-cover absolute  op-0 left-0 bg-no-repeat bg-center "
        alt=""
      />
      <div className="w-full h-full bg-neutral-900 top-0 left-0 absolute opacity-60 "></div>
      {/* Container */}

      <div className="max-w-[700px] h-[700px] mx-auto py-4 relative top-10 flex flex-col justify-between">
        <div>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            onKeyPress={seearchLocation}
            placeholder="Enter Location"
            className="p-2 bg-white/10 rounded-lg justify-center items-center"
          />
        </div>
        {/* Top Section Name */}
        <div className="w-100 mx-4 my-10">
          <div>
            <p className="text-2xl">{data.name}</p>
          </div>
          <div>
            {data.main ? (
              <p className="text-8xl font-bold">
                {data?.main?.temp.toFixed()}°F
              </p>
            ) : null}
          </div>
          <div className="relative -right-[90%] origin-[0%_0%] rotate-[-90deg]">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {/* Bottom Section, Search Box */}

        {data.name && (
          <div className="flex justify-evenly text-center w-full mx-4-my my-2 bg-white/10 p-4 rounded-lg">
            <div>
              {data.main ? (
                <p className="text-3xl">{data.main.feels_like.toFixed()} °F</p>
              ) : null}
              <p className="">FEELS LIKE</p>
            </div>
            <div>
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p className="text-lg font-extralight">Humidity</p>
            </div>
            <div>
              {data.main ? <p>{data.wind.speed}MPH</p> : null}
              <p className="text-lg font-extralight">wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
