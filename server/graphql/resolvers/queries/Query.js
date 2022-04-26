export const Query = {
	user: async (parents, args, { User }) => {
		return await User.findById(args.id)
	},
	users: async (parents, args, { User }) => {
		return await User.find({}).sort({ createdAt: 'desc' })
	},
	snap: async (parents, args, { Snap }) => {
		return await Snap.findById(args.id)
	},
	snaps: async (parents, args, { Snap }) => {
		return await Snap.find({}).sort({ createdAt: 'desc' })
	},
}

export default Query
