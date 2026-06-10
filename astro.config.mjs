// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    },
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
        fallbacks: ["sans-serif"],
        weights: ["300", "400", "500", "600", "700"],
        styles: ["normal", "italic"],
        subsets: ["latin"]
    }]
});