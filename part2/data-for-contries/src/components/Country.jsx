import { useEffect, useState } from "react";
import weatherServices from '../services/weatherRequests';

const Country = ({ country }) => {
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        weatherServices.getForecastWeatherData(country.latlng[0], country.latlng[1]).
            then(response => {
                setWeatherInfo(response);
            }).
            catch(error => {
                console.log(error);
            })
    }, []);


    const languages = country ? Object.values(country.languages) : null;

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: <span>{country.capital[0]}</span></p>
            <p>Area: <span>{country.area}km</span></p>
            <h3>Languages</h3>
            {languages &&
                <ul>
                    {languages.map((language, index) => <li key={index}>{language}</li>)}
                </ul>
            }
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h2>Weather in {country.name.common}</h2>
            {weatherInfo
                ?
                <>
                    <p>Temperature: {weatherInfo.main.temp} Celcius</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" />
                    <p>Wind: {weatherInfo.wind.speed}m/s</p>
                </>
                : <p>Not weather available</p>
            }
        </div>
    )
}

export default Country