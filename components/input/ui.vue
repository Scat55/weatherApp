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
    />
    <button class="input__searchIcon" @click="test(searcCity)">
      <img src="../../assets/images/search.svg" alt="Search icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.input {
  position: relative;
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

  &__searchIcon {
    position: absolute;
    top: 5%;
    right: 30.5%;
    width: 25px;
    height: 25px;
    background: #fff;
    cursor: pointer;
    border: none;
    outline: none;

    img {
      width: 100%;
    }
  }
}
</style>
