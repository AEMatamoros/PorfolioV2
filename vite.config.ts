import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import path from 'path';

export default defineConfig({
    plugins: [react(), pluginRewriteAll()],
    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, './src/components'),
            '@Hooks': path.resolve(__dirname, './src/hooks'),
            '@Interfaces': path.resolve(__dirname, './src/interfaces'),
            '@Constants': path.resolve(__dirname, './src/constants'),
            '@Utils': path.resolve(__dirname, './src/utils'),
            '@Assets': path.resolve(__dirname, './src/assets'),
            '@': path.resolve(__dirname, './src'),
        },
    },
});
