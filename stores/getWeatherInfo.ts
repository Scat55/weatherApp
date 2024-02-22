import axios from 'axios';
import { defineStore } from 'pinia';

const apiKey = import.meta.env.VITE_API_KEY_WEATHER;

export const useWeatherAPIStore = defineStore('weatherAPI', () => {
  const city = ref('');

  const getWeatherInfo = async (citySearch: string) => {
    city.value = citySearch;
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${city.value}&appid=${apiKey}`,
    );
    city.value = '';
  };

  return {
    city,
    getWeatherInfo,
  };
});
