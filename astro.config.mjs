import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
	site: 'https://ichsansandy.github.io',
	integrations: [tailwind()]
})
