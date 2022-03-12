import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';

const PORT = 4321;
let ORIGIN = `http://localhost:${PORT}`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({configFile: './svelte.config.js'})],
  server: {
    origin: ORIGIN,
    port: PORT,
  },

  resolve: {
    alias: {
      '@styles': '/src/@assets/styles/',
    }
  },
});
