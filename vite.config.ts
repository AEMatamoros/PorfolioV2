import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';

export default defineConfig({
    base: '/PorfolioV2/',
    plugins: [react(), pluginRewriteAll(), pluginPurgeCss({})],
});
