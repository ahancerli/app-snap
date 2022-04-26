import mongoose from 'mongoose'
const Schema = mongoose.Schema
import bcrypt from 'bcrypt'

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next()
	}
	bcrypt.hash(this.password, 10).then(hash => {
		this.password = hash
		next()
	})
})

export default mongoose.model('user', userSchema)
