<script setup lang="ts">
import { useWeatherAPIStore } from '@/stores/getWeatherInfo';

const weatherInfo = useWeatherAPIStore();
</script>

<template>
  <div class="main-window">
    <InputUi />
    <div class="main-window__info" v-if="weatherInfo.weatherData === null">
      Введите название города
    </div>
    <div v-else>
      <WeatherTodayUi />
      <div class="watherThreeDays">
        <WeatherThreeDaysUi />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-window {
  width: 548px;
  height: 660px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(
    144deg,
    rgba(255, 255, 255, 0.11) 0%,
    rgba(255, 255, 255, 0.22) 100%
  );
  filter: blur(0px);
  backdrop-filter: blur(25px);
  padding: 20px;

  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
  }
}

.watherThreeDays {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
