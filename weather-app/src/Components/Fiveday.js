import React from 'react'
import moment from 'moment';

export default function Fiveday({data2}) {
    // console.log(data2)
    if (!data2) return null;

    const FiveDayData = () => {
        return data2.slice(1, 7).map((data, i) => {
            return (
                <div key={i} style={{justifyContent:'center'}} className='col-xl-3 col-md-4 col-sm-12 bg-dark text-white m-3 p-2'>
                    <h3>{moment.unix(data.dt).format('ddd')}</h3>
                    <img src={`https://openweathermap.org/img/wn/${data2[i].weather[0].icon}@2x.png`}
                        alt='weather icon'/>
                    <p>Temp: {data.temp.day} °F</p>
                    <p>Wind: {data.wind_speed} MPH</p>
                    <p>Humidity: {data.humidity} %</p>
                </div>
            )
        })
    }

    return(
        <div id="forecast" className="col-12">
            <h3><strong>6-Day Forecast:</strong></h3>
            <div className="row" 
                id="fiveday"
                style={{border:'solid black', justifyContent:'center', margin:'20px'}}>
                <FiveDayData/>
            </div>
        </div>    
    )
}
