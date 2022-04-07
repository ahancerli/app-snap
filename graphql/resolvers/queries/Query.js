export const Query = {
	user: (parents, args, { db }) => {
		return {
			name: 'Akman',
			surname: 'Hançerli',
		}
	},
}

export default Query
