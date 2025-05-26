import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-challenges/Character-counter/' ,
  plugins: [svelte()],
    resolve: {
        alias: {
            "@": "/src/",
            "@components": "/src/components"
        }
    }
})
