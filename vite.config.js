import { resolve } from 'path';

import { defineConfig } from "vite";
import svelte from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    resolve: {
        alias: {
            $components: resolve('src/components'),
        }
    },
    plugins: [
        svelte({
            emitCss: false,
            hot: false
        })
    ]
})