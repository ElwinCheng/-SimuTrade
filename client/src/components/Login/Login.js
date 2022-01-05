import React, { useState } from 'react'
import { Paper, Button, Container, Grid, Typography, Avatar} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux'
import { signin, signup } from '../../actions/auth.js';

import Field from './Field.js'
import styles from './Login.module.css'


const initialState ={ firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Login = () => {

	const dispatch = useDispatch()

	const [formData, setFormData] = useState(initialState)
	const [isSignup, setIsSignup] = useState(true)
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit =(e) => {
		setSubmitted(true)
		e.preventDefault()

		if(isSignup) {
			dispatch(signup(formData))
		} else {
			dispatch(signin(formData))
		}
	}


	const handleChange = (e) => {
		setFormData({...formData, [e.target.name] : e.target.value})
	}

	const switchMode = () => {
		setIsSignup(!isSignup)
	}



	return (
			<Container component="main" maxWidth="xs">
				<Paper className={styles.paper} elevation={2}>
					<Avatar className={styles.lock}>
						<LockIcon />
					</Avatar>
					<Typography component="h1">{ isSignup ? 'Sign up' : 'Sign in'}</Typography>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{isSignup &&
							<>
								<Field name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
								<Field name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
							</>
							}
							<Field name="email" label="Email Address" handleChange={handleChange} type="email" />
							<Field name="password" label="Password" handleChange={handleChange} type="password" />
							{isSignup && <Field name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
						</Grid>
						<div className={styles.buttons}>
							<div>
								<Button type="submit" >{ submitted ? <CircularProgress /> : isSignup ? 'Sign up' : 'Sign in'}</Button>
							</div>
						</div>
						<Grid container justifyContent="center">
							<Grid item>
								<Button onClick={switchMode}>
									{ isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
				
			</Container>
	)
}

export default Login