/** @type {import('tailwindcss').Config} */

import {defineConfig} from 'vite'

export default defineConfig ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  server: {
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        secure:false
      }
    }
  }
})