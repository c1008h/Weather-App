import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm' 
import Bigdisplay from './Bigdisplay';
import Fiveday from './Fiveday';

export default function Container() {
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({daily:[]})
    const [searchMade, setSearchMade] = useState(false);
    
    const handleFormSubmit = (userInput) => {
       
        if(!userInput) {
            alert('Enter a valid city!')
        }
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            setData1({name: response.data.name, lon: response.data.coord.lon, lat: response.data.coord.lat});
            // console.log(response.data.coord)
            return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        })
        .then(response => {
            setData2({daily: response.data.daily});
            setSearchMade(true)
        })
        .catch(error => {
            console.log(error)
        })
       
       
    }

    return (
        <div className="container">
            <div className="row">
                <SearchForm onSubmit={handleFormSubmit}/>
                {searchMade && <Bigdisplay data1={data1} data2={data2}/> }
                {searchMade && <Fiveday data2={data2.daily}/> }
            </div>
        </div>
    )
}

