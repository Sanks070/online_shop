import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    devSourcemap: false,
  },
  server: {
    host: '0.0.0.0', // Allows external access
    port: 3000,      // Ensure it matches Docker's exposed port
  },
});
