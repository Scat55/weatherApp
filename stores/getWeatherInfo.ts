import { defineStore } from 'pinia';

export const useWeatherAPIStore = defineStore('weatherAPI', () => {
  const city = ref('');

  const getWeatherInfo = async (citySearch: string) => {
    city.value = citySearch;
    alert(city.value);
  };

  return {
    city,
    getWeatherInfo,
  };
});
