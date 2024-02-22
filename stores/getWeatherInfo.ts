import axios, { AxiosError } from 'axios';
import { defineStore } from 'pinia';

interface WeatherData {
  temp: number;
  humidity: number;
}

const apiKey = import.meta.env.VITE_API_KEY_WEATHER;

export const useWeatherAPIStore = defineStore('weatherAPI', () => {
  const city = ref('');

  // Делаем запрос к серверу на получение информации о погоде
  const getWeatherInfo = async (citySearch: string) => {
    city.value = citySearch;
    const weatherData = ref<WeatherData | null>(null);
    try {
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${city.value}&appid=${apiKey}`,
      );
      // Если запрос прошел хорошо, то записываем его значение в переменную WeatherData
      weatherData.value = data;
      console.log(weatherData.value);
    } catch (err: any) {
      // Если же запрос не прошел, то обрабатываем ошибки
      ElNotification({
        message: err.response.data.message,
        type: 'error',
      });
    }
  };

  return {
    city,
    getWeatherInfo,
  };
});
