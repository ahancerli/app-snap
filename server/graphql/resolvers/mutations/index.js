import { user } from './user.mutation.js'
import { snap } from './snap.mutation.js'

const Mutation = {
	...user,
	...snap,
}

export default Mutation
