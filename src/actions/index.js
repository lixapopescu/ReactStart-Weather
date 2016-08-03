import axios from 'axios';

const API_KEY='60cd9e3359d46ac40dd4c505d314041b';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  // console.log('request', request);

  return {
    type: FETCH_WEATHER,
     payload: request
  };
}
