export const getFormattedDate = (date: string) =>
	new Date(date).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})
