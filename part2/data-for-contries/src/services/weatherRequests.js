import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather?';
const appid = 'appid=' + import.meta.env.VITE_OPENWEATHERMAP_KEY;
const optionalValues = 'exclude=minutely,hourly,dailyalerts&units=metric'

const getForecastWeatherData = async (lat, lon) => {
    try {
        const latitude = lat.toString();
        const longitude = lon.toString();
        const request = await axios.get(`${url}lat=${latitude}&lon=${longitude}&${appid}&${optionalValues}`);
        return request.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getForecastWeatherData
}