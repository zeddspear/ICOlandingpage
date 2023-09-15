/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        '3xl': '0 45px 65px -12px rgba(0, 0, 0, 0.6)',
      },
      colors: {
        primaryMain: '#081B38',
        secondaryMain: '#080F22',
        tertiaryMain: '#0E1326',
        purpleMain: '#6a0a6b',
        lightBlueMain: '#13b8ba',
        surface: '#F6F6F6',
        interactiveMain: '#2E72D2',
      },
    },
  },
  plugins: [],
};
