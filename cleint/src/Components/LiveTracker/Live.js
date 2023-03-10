import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url=`https://api.openweathermap.org/data/2.5/weather?`
const key=`c058c18438a904d5a109c536340230a2`
const Livetrack=()=>{
    const [latitude,setLatitude]=useState('')
    const [longitude,setlongitude]=useState('')
    const [data,setdata]=useState({})
    const navigate=useNavigate()
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude);
            setlongitude(position.coords.longitude)
        })
        axios.get(`${url}lat=${latitude}&lon=${longitude}&appid=${key}`).then((response)=>{
            setdata(response.data)
            console.log(response.data)
        })
const searchLocation=()=>{
navigate('/')
}
        return(
            <>
             <div className="container">
                <button onClick={searchLocation}>search</button>
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
            {data.main ? <h1>{data.main.temp.toFixed()-273.15.toFixed()}°C</h1> : null}
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()-273.15.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        </div>
            </>
        )
    })
}
export default Livetrack