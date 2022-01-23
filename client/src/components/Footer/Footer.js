import React from 'react'
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer>
			<div className={styles.footerText}>
				SimuTrade | Made with ♥ by Elwin Cheng |
				<Button sx={{color: 'black'}} target="_blank" href="https://github.com/elwincheng/simutrade">
					<GitHubIcon />
				</Button>
			</div>
		</footer>
	)
}

export default Footer