import React, { useEffect, useState } from 'react';
import './Weather.css';

export default function Weather(props) {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${props.apiKey}`;
        let data = await fetch(url);
        console.log(data);
        if(data.status === '404'){
            return ;
        }
        let parsedData = await data.json();
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
                        {!weather || weather.cod==='404' ?
                            (<>
                                <p className='error-msg'>🙁 No Place like 
                                    <strong>
                                    {" "+ props.city + " "}
                                    </strong>
                                    Exists in our database 
                                   
                                    <marquee behavior="scroll" direction="left">Try searching with correct spelling </marquee>

                                </p>
                            </>
                            ) :
                            (<>
                                <h3>{props.city}</h3>
                                <br />
                                <h3 className="temp">
                                    {weather.main.temp}°C
                                </h3>
                                <div className='description'>
                                        {weather.weather[0].main}
                                    <p>({weather.weather[0].description})</p>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
