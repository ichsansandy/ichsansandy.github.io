import type { CollectionEntry } from 'astro:content'

export function sortBlogByDate(a:CollectionEntry<'blogs'>, b:CollectionEntry<'blogs'>) {
	const dateA = new Date(
		a.data.date.split('-').reverse().join('-') 
	)
	const dateB = new Date(
		b.data.date.split('-').reverse().join('-') 
	)

	return dateB.getTime() - dateA.getTime()
}
