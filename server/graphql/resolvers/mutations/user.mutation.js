import bcrypt from 'bcrypt'
import Token from '../../../helpers/token.js'
export const user = {
	createUser: async (parents, { data: { username, password } }, { User }) => {
		const user = await User.findOne({ username })

		if (user) {
			throw new Error('User already exists')
		}
		const newUser = await new User({
			username,
			password,
		}).save()
		return { token: Token.generate(newUser, '1h') }
	},

	signIn: async (parents, { data: { username, password } }, { User }) => {
		const user = await User.findOne({ username })

		if (!user) {
			throw new Error('User does not exist!')
		}

		const validPassword = await bcrypt.compare(password, user.password)
		if (!validPassword) {
			throw new Error('Invalid password!')
		}
		return { token: Token.generate(user, '1h') }
	},
}
