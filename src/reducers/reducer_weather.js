import {FETCH_WEATHER} from '../actions/index';

export default function WeatherReducer(state = [], action){
  // console.log('Action recevived', action);
  switch (action.type){
    case FETCH_WEATHER: return [action.payload.data, ...state];
  }
  return state;
}
