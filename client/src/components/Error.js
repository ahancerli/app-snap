function Error(props) {
	const { message } = props.error
	return <div>{message}</div>
}

export default Error
