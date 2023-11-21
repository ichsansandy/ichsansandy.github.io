import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			author: z.object({
				name: z.string(),
				avatar: image()
			}),
			date: z.string(),
			image: image(),
			title: z.string()
		})
})

export const collections = {
	blogs: blogCollection
}
