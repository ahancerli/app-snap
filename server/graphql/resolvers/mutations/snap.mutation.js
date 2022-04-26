export const snap = {
	createSnap: async (parents, { data: { text, userId } }, { Snap }) => {
		return await new Snap({
			userId,
			text,
		}).save()
	},
}
