import { defineConfig } from 'vite';

export default defineConfig({
  // Keep this standalone project independent of the parent app's Tailwind config.
  css: { postcss: { plugins: [] } },
  server: { host: '127.0.0.1', port: 5173, strictPort: false },
});
