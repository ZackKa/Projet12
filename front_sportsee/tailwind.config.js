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
        '20%':'19%',
        '80%':'79%',
        'litle_chart':'28%'
      }
    },
  },
  plugins: [],
}

