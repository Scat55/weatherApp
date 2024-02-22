<script setup lang="ts">
import { useWeatherAPIStore } from '@/stores/getWeatherInfo';

const weatherAPI = useWeatherAPIStore();
const searcCity = ref<string>('');

// Передаем значение из инпута в стор
const test = (city: string) => {
  weatherAPI.getWeatherInfo(city);
};
</script>

<template>
  <div class="input">
    <input
      class="input__main"
      type="text"
      placeholder="Название города..."
      v-model="searcCity"
      @keyup.enter="test(searcCity)"
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__main {
    padding: 5px;
    border-radius: 8px;
    border: none;
    outline: none;

    &:focus {
      box-shadow: 0 0 5px 2px #85656a;
    }
  }
}
</style>
