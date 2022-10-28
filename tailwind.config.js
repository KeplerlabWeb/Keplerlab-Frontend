/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'red': '#FF0000',
      'black': "#000000",
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#FFC60B',
      'white':'#ffffff',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-200': 'rgb(229 231 235)',
      'zinc-200': 'rgb(228 228 231)',
      'zinc-300': 'rgb(212 212 216)',
      'zinc-400': 'rgb(161 161 170)',
      'zinc-500': 'rgb(113 113 122)',
      'zinc-600': 'rgb(82 82 91)',
      'zinc-700': 'rgb(63 63 70)',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Poppins_Bold: ['Poppins-Bold', 'sans-serif'],
      Poppins_Regular: ['Poppins-Regular', 'sans-serif'],
      Poppins_Medium: ['Poppins-Medium', 'sans-serif'],
      Poppins_SemiBold: ['Poppins-SemiBold', 'sans-serif'],
      DMSans_Medium: ['DMSans-Medium', 'sans-serif'],
      DMSans_Bold: ['DMSans-Bold', 'sans-serif'],
    },
    extend: {
      textUnderlineOffset : {
        16: '16px',
      }, 
      textDecorationThickness: {
        16: '16px',
      },
      spacing: {
        'xsm':'430px',
        'xxsm':'230px',
      },
    },
  },
  plugins: [],
}

