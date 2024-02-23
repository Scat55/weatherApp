import { defineStore } from 'pinia';
import axios from 'axios';
import moment, { type Moment } from 'moment';

const apiKey = import.meta.env.VITE_API_KEY_WEATHER;
const city = ref('');
const filterData = ref(null);

interface Test {
  date: Moment;
  temp: number;
  description: string;
  iconUrl: string;
}

export const useWeatherAPIThreeDays = defineStore(
  'weatherAPIForThreeDays',
  () => {
    const weaterInfoThreeDays = async (cityName: string) => {
      city.value = cityName;
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lang=ru&q=${city.value}&units=metric&appid=${apiKey}`,
        );
        const forecastData = data.list;
        filterData.value = forecastData
          .map((item: Test) => {
            return {
              date: moment(item.dt_txt.split(' ')[0]),
              temp: Math.round(item.main.temp),
              description: item.weather[0].description,
              iconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
            };
          })
          .reduce((acc, item) => {
            if (!acc.some((day) => day.date.isSame(item.date, 'day'))) {
              acc.push(item);
            }
            return acc;
          }, [])
          .slice(1, 4);
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
      filterData,
      weaterInfoThreeDays,
    };
  },
);
