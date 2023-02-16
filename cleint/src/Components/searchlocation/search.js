import React,{useState} from 'react'
import axios from 'axios'
import './search.css'
const Search= () =>{
  const [location,setlocation]=useState('')
  const[data,setData]=useState({}) 
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c058c18438a904d5a109c536340230a2`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setlocation('')
    }
  }
  return (
    <>
    <div >
      <input type='text'
      onKeyPress={searchLocation}
       placeholder='Enter Your City'
        value={location}
         onChange={(e)=>{setlocation(e.target.value)}}
        />
        <button >add a favourite</button>
    </div>
    <div className="container">
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
  );
}

export default Search;
