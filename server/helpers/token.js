import jwt from 'jsonwebtoken'
const Token = {
	generate: (user, expiresIn) => {
		return jwt.sign(
			{
				user,
			},
			process.env.SECRET_KEY,
			{ expiresIn }
		)
	},
}

export default Token
