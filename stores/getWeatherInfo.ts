import axios from 'axios';
import { defineStore } from 'pinia';

const apiKey = import.meta.env.VITE_API_KEY_WEATHER;

export const useWeatherAPIStore = defineStore('weatherAPI', () => {
  const getWeatherInfo = async (citySearch: string) => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`,
    );
  };

  return {
    getWeatherInfo,
  };
});
