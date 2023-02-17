import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/VidaVodka/" : "/",
};

export default defineConfig({
  base: '/VidaVodka/',
  plugins: [vue()],
})
