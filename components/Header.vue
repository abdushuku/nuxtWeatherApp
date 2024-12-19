<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../store/index';

// Create a Pinia store instance
const weatherStore = useWeatherStore();

// Define reactive data
const query = ref(null);
console.log(query);


// Define method to send data to the store
async function sendData() {
  if (query.value) {
    try {
      await weatherStore.getWeather(query.value);
      query.value = null;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<template>
  <header class="header pt-20 pb-30">
    <nav class="header__nav flex justify-between items-center ">
      <a href="#" class="logo flex items-center lg:gap-20 sm:gap-[10px] font-bold xl:font-25 sm:font-20 uppercase text-blue">
        <NuxtImg src="/images/logo.svg" alt="" size="sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" lazy/>
        vue weather
      </a>
      <div class="header__search flex items-center lg:gap-25 sm:gap-[10px]">
        <NuxtImg src="/images/water.png" size="sm:w-[24px] sm:h-[24px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" lazy/>
        <input
          type="text"
          class="header__search-input sm:w-[150px]"
          v-model="query"
          @keydown.enter="sendData"
          placeholder="Выбрать город"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header__search-input {
  font-weight: 500;
  font-size: 16px;
  color: #000;
  padding: 9px 20px;
  width: 194px;
  border-radius: 10px;
  background: rgba(71, 147, 255, 0.2);
  border: none;
  outline: none;
}

@media screen and (max-width: 374px) {
  .header__search-input {
    width: 150px;
    padding: 5px 10px;
  }
}

</style>
