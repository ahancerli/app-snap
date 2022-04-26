import { Fragment } from 'react'
import Header from '../components/Header'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
//pages
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Join from '../components/pages/Join'

const Root = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/join' component={Join} />
					<Redirect to='/' />
				</Switch>
			</Fragment>
		</Router>
	)
}

export default Root
