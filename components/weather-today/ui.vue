<script setup lang="ts">
import { useWeatherAPIStore } from '@/stores/getWeatherInfo';

const weatherInfo = useWeatherAPIStore();

const monthNames = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const date = new Date();

const dateNow = date.getDate();
const monthNow = date.getMonth();
const yearNow = date.getFullYear();
</script>

<template>
  <div class="weather">
    <div class="weather-data">
      <p class="weather-data__day">
        Сегодня: {{ dateNow }} {{ monthNames[monthNow] }} {{ yearNow }}
      </p>
      <p class="weather-data__nameCity">{{ weatherInfo.weatherData.name }}</p>
      <span class="weather-data__description">{{
        weatherInfo.weatherData.weather[0].description
      }}</span>

      <span class="temp__info">
        {{ (weatherInfo.weatherData.main.temp - 273.15).toFixed() }}
        <sup>o</sup>C
      </span>
      <div class="weather-data__temp">
        <div class="weather-data__wind">
          <span
            >Скорость ветра: {{ weatherInfo.weatherData.wind.speed }} м/с</span
          >
          <span>Влажность : {{ weatherInfo.weatherData.main.humidity }}%</span>
        </div>
        <img
          :src="`https://openweathermap.org/img/wn/${weatherInfo.weatherData.weather[0].icon}@2x.png`"
          alt="weatherIcon"
          class="temp__img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.weather {
  &-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;

    &__day {
      color: #fff;
      font-size: 12px;
      margin-bottom: 10px;
    }
    &__nameCity {
      color: #fff;
      font-size: 24px;
    }
    &__description {
      color: #fff;
      font-size: 18px;
    }

    &__temp {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__wind {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: #fff;
    }
  }
}
.temp {
  &__info {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>
