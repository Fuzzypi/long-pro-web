import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react()
    // ← remove tailwindcss() here; PostCSS will process Tailwind
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      '5173-iwp7kd1i4o9nfyyg1bi4p-23a4ab7d.manusvm.computer',
      'localhost',
      '127.0.0.1',
    ],
  },
});
