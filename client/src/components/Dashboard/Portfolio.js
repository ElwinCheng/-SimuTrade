import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import * as api from '../../api/index.js'

const Portfolio = (props) => {
	const [trades, setTrades] = useState([]);
	const user = useSelector(state => state?.data?.authData)

	/*
	useEffect(() => {
		async function fetchTrades() {
			const { data } = await api.getTrades(user?.result?._id)
			console.log(data);
			setTrades(data)
		}
		fetchTrades()
		console.log(trades)
	}, [])
	*/

	return (
		<Card
			sx={{ height: '100%' }}
			{...props}
		>
			<CardContent>
				<Grid
					container
					spacing={3}
					sx={{ justifyContent: 'space-between' }}
				>
					<Grid item>
						<Typography
							color="textSecondary"
							gutterBottom
							variant="overline"
						>
							BUDGET
						</Typography>
						<Typography
							color="textPrimary"
							variant="h4"
						>
							$24k
						</Typography>
					</Grid>
					<Grid item>
						<Avatar
							sx={{
								backgroundColor: 'error.main',
								height: 56,
								width: 56
							}}
						>
							<MoneyIcon />
						</Avatar>
					</Grid>
				</Grid>
				<Box
					sx={{
						pt: 2,
						display: 'flex',
						alignItems: 'center'
					}}
				>
					<ArrowDownwardIcon color="error" />
					<Typography
						color="error"
						sx={{
							mr: 1
						}}
						variant="body2"
					>
						12%
					</Typography>
					<Typography
						color="textSecondary"
						variant="caption"
					>
						Since last month
					</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}

export default Portfolio