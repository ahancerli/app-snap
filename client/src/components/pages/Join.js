import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_USER } from '../../queries'
import Error from '../Error'

export default class Join extends Component {
	state = {
		username: '',
		password: '',
		passwordConfirm: '',
	}

	onChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
	}

	formValidate = () => {
		const { username, password, passwordConfirm } = this.state
		return (
			!username || !password || !passwordConfirm || password !== passwordConfirm
		)
	}

	onSubmit = (e, createUser) => {
		e.preventDefault()
		createUser().then(data => console.log(data))
	}

	render() {
		const { username, password, passwordConfirm } = this.state
		return (
			<div>
				<Mutation mutation={CREATE_USER} variables={{ username, password }}>
					{(createUser, { loading, error }) => (
						<form
							className='user-form'
							onSubmit={e => {
								this.onSubmit(e, createUser)
							}}>
							<label>
								<input
									onChange={this.onChange}
									name='username'
									type='text'
									placeholder='username'
								/>
							</label>
							<label>
								<input
									onChange={this.onChange}
									name='password'
									type='password'
									placeholder='password'
								/>
							</label>
							<label>
								<input
									onChange={this.onChange}
									name='passwordConfirm'
									type='password'
									placeholder='confirm password'
								/>
							</label>
							<label>
								<button disabled={loading || this.formValidate()}>Join</button>
							</label>

							{loading && <p>Loading...</p>}
							{error && <Error error={error} />}
						</form>
					)}
				</Mutation>
			</div>
		)
	}
}
