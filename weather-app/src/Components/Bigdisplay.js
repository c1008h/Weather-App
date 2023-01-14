import React from 'react'
import Moment from 'react-moment'
import '../../src/index.css';

export default function Bigdisplay({data1, data2}) {
    const date = new Date()
    // console.log(data1.name)
    // console.log(data2.daily)

    if (!data2.daily || data2.daily.length === 0) return null;

    const uvClass = data2.daily[0].uvi <= 2 ? "favorable" : data2.daily[0].uvi > 2 && data2.daily[0].uvi <= 5 ? "moderate" : "severe";
    
  
    return (
        <div className="col-12 col-md-8" id="right-side" >
            <div className="col m-1" id="display-side">
                <div id="city-info" style={{textAlign:'center',}} className='bg-dark text-white'>
                    <h3 style={{display:'inline'}}>{data1.name} (<Moment format='M/D/YYYY'>{date}</Moment>)</h3>
                    <img src={`https://openweathermap.org/img/wn/${data2.daily[0].weather[0].icon}@2x.png`} alt='weather icon' style={{display:'inline'}}/>
                    <p>Temp: {data2.daily[0].temp.day} °F</p>
                    <p>Wind: {data2.daily[0].wind_speed} MPH</p>
                    <p>Humidity: {data2.daily[0].humidity} %</p>
                    <p>UV Index: <span id='uvSpan' className={uvClass}>{data2.daily[0].uvi}</span></p> 
                </div>
            </div>
        </div>
    )
}

