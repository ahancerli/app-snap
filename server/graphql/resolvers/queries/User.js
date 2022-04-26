export const User = {
	snaps: async (parents, args, { Snap }) => {
		return await Snap.find({ userId: parents._id }).sort({ createdAt: 'desc' })
	},
}

export default User
