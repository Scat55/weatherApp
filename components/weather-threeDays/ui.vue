<script setup lang="ts">
import { useWeatherAPIThreeDays } from '@/stores/getWeatherForThreeDays';
import { useWeatherAPIStore } from '@/stores/getWeatherInfo';

const storeCity = useWeatherAPIStore();
const weatherInfo = useWeatherAPIThreeDays();

const getTest = (city: string) => {
  weatherInfo.weaterInfoThreeDays(city);
};

getTest(storeCity.city);
</script>

<template>
  <div class="watherThreeDays" v-for="day in weatherInfo.filterData">
    <span class="watherThreeDays__day">{{ day.date._i }}</span>
    <img class="watherThreeDays__img" :src="day.iconUrl" alt="" />
    <span class="watherThreeDays__temp">{{ day.temp }}</span>
    <p>{{ day.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.watherThreeDays {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  width: 150px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(
    144deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  filter: blur(0px);
  backdrop-filter: blur(25px);
  padding: 20px;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__day {
    @media (max-width: 580px) {
      font-size: 12px;
    }
  }
  &__temp {
    font-size: 32px;
    color: #fff;
    font-weight: bold;
    @media (max-width: 580px) {
      font-size: 16px;
    }
  }

  @media (max-width: 580px) {
    padding: 0 5px;
    width: 98px;
    height: 120px;
  }

  @media (max-width: 380px) {
    padding: 0 5px;
    width: 80px;
    height: 120px;
  }
}
</style>
