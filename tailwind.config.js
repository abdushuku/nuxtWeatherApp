/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {

    extend: {
      colors:{
        "blue":"#4793ff",
        'greey':'#939cb0',
        'hedaer-input':'rgba(71, 147, 255, 0.2)',
        'background':'rgba(71, 147, 255, 0.2)'
      },
      boxShadow: {
        'custom': '2px 5px 25px -3px rgba(180, 180, 180, 0.25)',
        'second':'0 3px 20px 0 rgba(147, 144, 144, 0.28)'
      },
      spacing: {
        '10':'10px',
        '14':'14px',
        '16':'16px',
        '20':'20px',
        '22':'22px',
        '25':'25px',
        '30':'30px',
        '32':'32px',
        '40':'40px',
        '42':'42px',
        '46':'46px',
        '96':'96px',
        '117':'117px',
        '120':'120px',
        '194':'194px',
        '400':'400px',
        '750':'750px'
      }
    },
    screens:{
      'sm':'374px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    }
  },

  plugins: [],

}
