import React, { useEffect, useState } from 'react';
import './Weather.css';

export default function Weather(props) {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${props.apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setWeather(parsedData);
    }
    useEffect(() => {
        fetchWeather();
        // eslint-disable-next-line
    }, [props.city])

    return (
        <>
            <div>
                <div className=" title-body container my-3">
                    <h1 className="text-center">Weather</h1>
                </div>
                <div className="container whole-body">
                    <div className="weather-box py-3" >
                        {!weather ?
                            (<p>No record found</p>) :
                            (<>
                                <h3>{props.city}</h3>
                                <br />
                                <h3 className="temp">
                                    {weather.main.temp}°C
                                </h3>
                                <div className='description'>
                                        {weather.weather[0].main}
                                    <p>{weather.weather[0].description}</p>
                                </div>
                            </>)}
                    </div>
                </div>
            </div>
        </>
    )
}
