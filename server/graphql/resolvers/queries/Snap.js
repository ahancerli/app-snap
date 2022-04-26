export const Snap = {
	user: async (parents, args, { User }) => {
		return await User.findById(parents.userId)
	},
}

export default Snap
