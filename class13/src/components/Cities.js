import { useState } from 'react';
import { api } from '../constants/ApiConstants';


export const Cities = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(undefined);

    const searchWeather = () => {
        console.log(city); // proveruvame vo konzola dali ke se pojavi imeto na toj grad sto ke go napiseme vo inputot
        
        fetch(`${api.base}/weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setWeather(json);
        })
        .catch(err => alert(err))
    }

    // F-ja sto go prikauva tocniot datum i vreme momentalno
    function dateBuilder(datum) {
        let months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[datum.getDay()];
        let date = datum.getDate();
        let month = months[datum.getMonth()];
        let year = datum.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return(
        <div>
            <div className="search-box">
                <input placeholder="Search cities" 
                className="search-bar"
                value={city}
                onChange={(e) => {setCity(e.target.value)}} 
                />
                <button onClick={searchWeather}>Search</button>
            </div>
            { weather && (
                <div className='location-container'> 
                    <div className='location-box'>
                        <div className='location'>
                            {weather.name}, {weather.sys.country}
                        </div>
                    </div>
                    <div className="date">
                        {dateBuilder()}
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°c
                        </div>
                        <div className="weather">
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>
            )

            }
        </div>
    )
}