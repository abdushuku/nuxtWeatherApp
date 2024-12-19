<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../store/index'; // Import the Pinia store

// Create a Pinia store instance
const weatherStore = useWeatherStore();
const getFullWeather = computed(() => weatherStore.getFullWeather);

// Computed properties from the Pinia store
const getDescr = computed(() => weatherStore.getDescr);
const getTime = computed(() => weatherStore.getTime);

// Methods
const getWeatherIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}.png`;
};

const currentWeather = computed(() => {
  return getFullWeather.value ? getFullWeather.value.current : null;
});

const getCompassDirection = (degree) => {
  let direction;
  switch (true) {
    case degree >= 337 || degree < 22:
      direction = 'Север';
      break;
    case degree >= 22.5 && degree < 67.5:
      direction = 'Северо-восток';
      break;
    case degree >= 67.5 && degree < 112.5:
      direction = 'Восток';
      break;
    case degree >= 112.5 && degree < 157.5:
      direction = 'Юго-восток';
      break;
    case degree >= 157.5 && degree < 202.5:
      direction = 'Юго';
      break;
    case degree >= 202.5 && degree < 247.5:
      direction = 'Юго-запад';
      break;
    case degree >= 247.5 && degree < 292.5:
      direction = 'Запад';
      break;
    case degree >= 292.5 && degree < 337.5:
      direction = 'Северо-запад';
      break;
  }
  return direction;
};

// Fetch weather data
weatherStore.getWeather('Tashkent');
</script>

<template>
  <div class="main_content flex flex-wrap gap-y-10 justify-between" v-if="currentWeather">
    <div class="main_content-left relative lg:max-w-400 md:max-w-300 sm:max-w-200 w-full bg-white shadow-md shadow-gray-400/25 rounded-20 p-20">
      <p class="main_content-degree font-medium xl:text-[96px] md:text-[80px] sm:text-[60px] text-blue xl:leading-117 md:leading-100 sm:leading-90">
        {{ Math.round(currentWeather.temp) }}°
      </p>
      <p class="main_content-today font-normal xl:text-[40px] md:text-[30px] sm:text-[25px] text-black xl:pb-30 md:pb-20 sm:pb-14">Сегодня</p>
      <p class="main_content-time font-normal xl:text-[25px] md:text-[20px] sm:text-[16px] xl:pb-14 md:pb-10 sm:pb-8 xl:leading-30 md:leading-25 sm:leading-20">Время: {{ getTime }}</p>
      <p class="main_content-city font-normal xl:text-[25px] md:text-[20px] sm:text-[16px] text-greey xl:leading-30 md:leading-25 sm:leading-20">Город: {{ getFullWeather.name }}</p>
      <div class="main_content-img absolute top-46 right-20 w-120 h-120">
        <NuxtImg :src="getWeatherIconUrl(currentWeather.weather[0].icon)" alt="Weather Icon" class="w-full" size="xl:w-[120px] xl:h-[120px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px]"/>
      </div>
    </div>
    <div class="relative bg-white shadow-custom rounded-20 lg:max-w-750 md:max-w-600 sm:max-w-full w-full  px-32 py-42 felx flex-col xl:gap-y-22 md:gap-y-28 sm:gap-y-30 z-1">
      <NuxtImg src="../assets/images/cloud-bg.png" alt="" class="main_content-bg absolute top-0 right-0 -z-1" size="xl:w-[600px] xl:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px]"  lazy/>
      <div class="main_content-item sm:border-b-[1px] sm:w-full xl:border-none md:border-none sm:p-2 flex items-center xl:gap-[20px] md:gap-[15px] sm:gap-[10px] flex items-center">
        <div class="main_content-icon bg-white w-[38px] h-[38px] flex items-center justify-center rounded-full -z-1">
          <NuxtImg src="../assets/images/temp.svg" alt="" class="-z-4" size="xl:w-[38px] xl:h-[38px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px]"  lazy/>
        </div>
        <span>Температура</span>
        <span class="main_content-temp font-normal xl:text-[14px] md:text-[15px] sm:text-[17px] text-greey">{{Math.round(currentWeather.temp)}}° - ощущается как {{Math.round(currentWeather.feels_like)}}°</span>
      </div>
      <div class="main_content-item sm:border-b-[1px] sm:w-full xl:border-none md:border-none sm:p-2 flex items-center gap-20">
        <div class="main_content-icon bg-white w-38 h-38 flex items-center justify-center rounded-full">
          <NuxtImg src="../assets/images/pressure.svg" alt="" size="xl:w-[45px] xl:h-[45px] md:w-[40px] md:h-[40px] sm:w-[50px] sm:h-[50px]" lazy/>
        </div>
        <span class="">Давление</span>
        <span class="main_content-temp font-normal xl:text-[14px] md:text-[15px] sm:text-[17px] text-greey">{{ currentWeather.pressure }} мм ртутного столба - нормальное</span>
      </div>
      <div class="main_content-item sm:border-b-[1px] sm:w-full xl:border-none md:border-none sm:p-2 flex items-center gap-20">
        <div class="main_content-icon bg-white w-38 h-38 flex items-center justify-center rounded-full">
          <NuxtImg src="../assets/images/asat.svg" alt="" size="xl:w-[45px] xl:h-[45px] md:w-[40px] md:h-[40px] sm:w-[50px] sm:h-[50px]" lazy/>
        </div>
        <span class="">Осадки</span>
        <span class="main_content-temp font-normal xl:text-[14px] md:text-[15px] sm:text-[17px] text-greey">{{ currentWeather.weather[0].main }}</span>
      </div>
      <div class="main_content-item sm:border-b-[1px] sm:w-full xl:border-none md:border-none sm:p-2 flex items-center gap-20">
        <div class="main_content-icon bg-white w-38 h-38 flex items-center justify-center rounded-full">
          <NuxtImg src="../assets/images/wind.svg" alt="" size="xl:w-[45px] xl:h-[45px] md:w-[40px] md:h-[40px] sm:w-[50px] sm:h-[50px]" lazy/>
        </div>
        <span class="">Ветер</span>
        <span class="main_content-temp font-normal xl:text-[14px] md:text-[15px] sm:text-[17px] text-greey">{{ Math.round(currentWeather.wind_speed) }} м/с {{ getCompassDirection(currentWeather.wind_deg) }} - легкий ветер</span>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Загружаем данные...</p>
  </div>
</template>
