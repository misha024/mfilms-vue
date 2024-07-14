/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'roboto': ['Roboto', 'ui-sans-serif'],
      'impact': ['Impact', 'ui-sans-serif'],
      'inter': ['Inter', 'ui-sans-serif']
    }
  },
  plugins: [],
}

