import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
  ],
  server: {
    port: 8080,
    open: true
  },
  publicDir: 'static',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
