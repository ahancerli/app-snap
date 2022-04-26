import mongoose from 'mongoose'
const Schema = mongoose.Schema

const snapSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
	},
	text: {
		type: String,
		required: true,
	},

	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

export default mongoose.model('snap', snapSchema)
