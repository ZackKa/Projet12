/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor:{
        'color-card':'#FBFBFB',
        'color-average-bg':'#FF0000',
        'color-activity-bg':'#FBFBFB'
      },
      width:{
        'aside_w':'25%',
        'activity_w':'72%',
        'little_chart':'180px',
      },
      height:{
        'little_chart_h':'180px',
        'activity_h':'290px',
        'principal':'470px'
      }
    },
  },
  plugins: [],
}

