import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import Cash from './Cash'
import Assets from './Assets'
import Portfolio from './Portfolio'
import { useSelector } from 'react-redux'
import * as api from '../../api/index'

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem('profile'))
	const navigate = useNavigate()

	if (!user) {
		window.location.href="/login"
	}

	/*
	useEffect( () => {
		if (!user) {
			navigate('/login')
		}
		
	}, [])

	*/
	return (
		<Grid container spacing={3}>
			 <Grid item lg={4} sm={6} xl={3} xs={12}>
					<Cash cash={user?.result?.cash.toFixed(2)}/>
			 </Grid>
			 <Grid item lg={4} sm={6} xl={4} xs={12}>
				 <Portfolio />
			 </Grid>
			 <Grid item lg={4} sm={6} xl={4} xs={12}>
				 <Assets />
			</Grid>
		</Grid>
	)	
}

export default Dashboard