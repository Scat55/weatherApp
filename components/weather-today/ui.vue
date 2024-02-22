<script setup lang="ts">
import { useWeatherAPIStore } from '@/stores/getWeatherInfo';

const weatherInfo = useWeatherAPIStore();

console.log(weatherInfo.weatherData);
</script>

<template>
  <div>
    <!-- Рендер информации о погоде только тогда, когда weatherInfo не равен null -->
    {{ weatherInfo.weatherData.name }}
  </div>
</template>

<style scoped></style>
