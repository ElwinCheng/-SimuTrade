import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import decode from 'jwt-decode'
import logo from '../../img/simutrade_logo_transparent.png'

import styles from './Header.module.css'

const Header = () => {
	//const user = useSelector(state => state?.auth?.authData)
	const user = useSelector(state => state?.auth?.authData) || JSON.parse(localStorage.getItem('profile'))
	console.log(user)
	const location = useLocation()
	//const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
	const navigate = useNavigate()

	const dispatch = useDispatch()

	/*
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('profile')))
	}, [location])
	*/


	const logout =() => {
		dispatch({ type: 'LOGOUT' })
		navigate('/')
		//setUser(null)
		window.location.reload(false);
	}  

	const handleClick = () => {
		if (user) return logout()
		navigate('/login')
	}

	useEffect(()=> {
		const token = user?.token
		// setUser(JSON.parse(localStorage.getItem('profile')))
		//If token expires, logout the user
		if(token) {
				const decodedToken = decode(token)
				if(decodedToken.exp * 1000 < new Date().getTime()) logout()
		}
	}, [location, user]) //when location changes, set the user

	return (
			<div className={styles.wrapper}>
				<Grid container justifyContent="center" alignItems="flex-end">
					<Grid item sm={10}>
						<Button href="/">
							{user ? <></> : <img style={{width: '160px'}} src={logo} alt="logo"/>}
						</Button>
					</Grid>
					<Grid item sm={2}>
						<Button variant="contained" onClick={handleClick}>
							{ user ? "logout" : "Sign in"}
						</Button>
					</Grid>
				</Grid>
			</div>

	)
}

export default Header