<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../store/index.js';

const store = useWeatherStore();
const getDailyWeather = computed(() => store.getDailyWeather);
const getFullWeather = computed(() => store.getFullWeather);
const currentWeather = computed(() => {
  return getFullWeather.value ? getFullWeather.value.current : null;
});
console.log(getDailyWeather);

</script>
<template>
  <div class="xl:mt-[50px] md:mt-[40px] sm:mt-[30px]" v-if="currentWeather">
    <div class="flex justify-between items-center">
      <button class="font-normal xl:text-[18px] md:text-[16px] sm:text-[14px] shadow-custom xl:rounded-[5px] md:rounded-[5px] sm:rounded-[5px] xl:leading-[22px] md:leading-[20px] sm:leading-[18px] xl:px-20 md:px-16 sm:px-14 xl:py-7 md:py-6 sm:py-5  pointer bg-[#4793ff] text-white hover:bg-white hover:text-black duration-[0.3s]">На неделю</button>
      <button class="font-normal xl:text-[18px] md:text-[16px] sm:text-[14px] shadow-custom xl:rounded-[5px] md:rounded-[5px] sm:rounded-[5px] xl:leading-[22px] md:leading-[20px] sm:leading-[18px] xl:px-20 md:px-16 sm:px-14 xl:py-7 md:py-6 sm:py-5 pointer bg-[#4793ff] text-white hover:bg-white hover:text-black duration-[0.3s]">Отменить</button>
    </div>
    <div class="flex justify-between flex-wrap sm:gap-y-10 xl:gap-y-0 md:gap-y-0  bg-white shadow-second p-20 mt-20 rounded-[20px] ">
        <PerDay v-for="(day, index) in getDailyWeather" :key="index" :day="day"/>
    </div>
  </div>
</template>
