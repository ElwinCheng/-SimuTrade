import React from 'react'
import { Button, Grid } from '@mui/material'

import styles from './Header.module.css'

const Header = () => {
	return (
			<div className={styles.wrapper}>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item sm={10}>
						<p>Paper Stock</p>
					</Grid>
					<Grid item sm={2}>
						<Button variant="contained" href="/login">
							Get Started
						</Button>
					</Grid>
				</Grid>
			</div>

	)
}

export default Header