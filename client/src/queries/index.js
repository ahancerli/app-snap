import { gql } from 'apollo-boost'

export const CREATE_USER = gql`
	mutation ($username: String!, $password: String!) {
		createUser(data: { username: $username, password: $password }) {
			token
		}
	}
`
