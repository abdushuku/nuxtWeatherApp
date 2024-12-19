import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    apiKey: '880ca603dd0006e588a02a24511c2abd',
    getFullWeather: null,
    icons: null,
  }),
  getters: {
    getDailyWeather: (state) => state.getFullWeather?.daily?.slice(1) || [],
    getDescr: (state) => state.getFullWeather?.current?.weather[0]?.main || '',
    getTime: (state) => {
      if (!state.getFullWeather) return '';
      return new Date().toLocaleString('en-US', {
        timeZone: state.getFullWeather.timezone,
        timeStyle: 'short',
        hourCycle: 'h24',
      });
    },
  },
  actions: {
    async getWeather(city = 'Tashkent') {
      try {
        const queryLatLon = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${this.apiKey}`
        );
        const { lat, lon, name } = queryLatLon.data[0];
        const getWeather = await axios.get(
          `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely,hourly&appid=${this.apiKey}&lang=ru`
        );
        const weatherInfo = getWeather.data;
        const weatherObj = { ...weatherInfo, name };
        this.getFullWeather = weatherObj;
      } catch (error) {
        console.error('Error fetching weather data:', error?.response?.data || error.message);
        this.getFullWeather = { error: 'Unable to fetch weather data.' };
      }
    },
    getIcons(payload) {
      if (Array.isArray(payload)) {
        this.icons = payload;
      } else {
        console.error('Invalid payload for icons');
      }
    },
  },
});
