// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['s3.us-east-1.amazonaws.com', 'example.com'],
  },
  adapter: cloudflare(),
  output: 'static',
});
