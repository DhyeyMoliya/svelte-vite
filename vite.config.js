import { defineConfig } from "vite";
import svelte from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        svelte({
            emitCss: true,
            compilerOptions: {
                dev: true,
                hydratable: true
            },
            hot: true
        })
    ]
})