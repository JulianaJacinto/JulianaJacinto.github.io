import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/julianajacinto.github.io/", // e.g., "/my-react-app/"
});
