import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    define: { global: 'globalThis' },
    plugins: [
        react(),
        eslint({
            exclude: ['/virtual:/**', 'node_modules/**'],
        }),
    ],
    server: {
        host: true,
        port: 8080,
    },
});
