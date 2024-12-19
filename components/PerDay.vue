<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../store/index.js';
import { timeStamp } from '../utils/timeStamp.js';

// Define Props
const props = defineProps({
  day: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

// Pinia Store
const store = useWeatherStore();

// Computed Properties
const getWeek = computed(() => timeStamp(props.day?.dt, 'weekday', props.index));
const getDay = computed(() => timeStamp(props.day?.dt, 'day'));
const getMonth = computed(() => timeStamp(props.day?.dt, 'month'));
const getDescr = computed(() => props.day?.weather?.[0]?.description || 'Нет данных');

// Get weather icon URL
const getWeatherIconUrl = (iconCode) =>
  iconCode ? `http://openweathermap.org/img/wn/${iconCode}@2x.png` : '/default-icon.png';

console.log('Daily Weather:', store.getDailyWeather);
</script>

<template>
  <div>
    <div class="bg-background rounded-[10px] p-[11px] w-[149px]">
      <h3 class="font-medium text-[18px] mb-[7px] leading-[22px]">{{ getWeek }}</h3>
      <p class="font-normal text-[14px] text-greey mb-[12px] leading-[17px]">
        {{ getDay }} {{ getMonth }}
      </p>
      <div class="main_week-img">
        <NuxtImg
          :src="getWeatherIconUrl(props.day?.weather?.[0]?.icon)"
          alt="Weather Icon"
          size="lg:w-1/3 sm:w-full"
          lazy
        />
      </div>
      <p class="font-medium text-[18px] text-black mt-[13px] leading-[22px]">
        +{{ Math.round(props.day?.temp?.day || 0) }}°
      </p>
      <p class="font-normal text-[13px] text-greey mb-[6px] leading-[16px]">
        +{{ Math.round(props.day?.temp?.night || 0) }}°
      </p>
      <p class="font-normal text-[13px] text-greey leading-[16px]">
        {{ getDescr }}
      </p>
    </div>
  </div>
</template>

<style>
/* Add your custom styles */
</style>
