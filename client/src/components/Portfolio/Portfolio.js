import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardHeader, Box, Table, TableHead, TableBody, TableRow, TableCell, Tooltip,  TableSortLabel } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import PerfectScrollbar from 'react-perfect-scrollbar'
import * as api from '../../api'
import { useSelector } from 'react-redux'
import AssetValue from '../Assets/AssetValue'


// sign up aand get a free amazon stock

const Portfolio = () => {
	const user = JSON.parse(localStorage.getItem('profile'))
	const assets = useSelector(state => state?.auth?.authData?.assets);
	const [trades, setTrades] = useState([])
	const navigate = useNavigate()
	const [assetValue, setAssetValue] = useState(0)

	if (!user) navigate('/login')

	const getAssetsValue = async () => {
		let value = 0
		for (const [symbol, quantity] of Object.entries(assets)) {
			const { data: { data } } = await api.quote(symbol)
			value += data.c * quantity
		}
		setAssetValue(value)
	}

	useEffect(() => {
		async function fetchTrades() {
			const { data } = await api.getTrades(user?.result?._id)
			//console.log(data);
			setTrades(data)
			await getAssetsValue();
			//setAssetValue(value)
		}
		fetchTrades()
		//console.log(trades)
	}, [])

	return (
		<Card >
		<AssetValue message="Portfolio value: USD$ "/>
    <CardHeader title="All Trades" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>
								Stock
              </TableCell>
              <TableCell>
								Price
              </TableCell>
              <TableCell>
								Quantity
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
								Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((trade) => (
              <TableRow
                hover
                key={(new Date(trade.date)).getTime()}
              >
                <TableCell>
                  {trade.symbol}
                </TableCell>
                <TableCell>
                  {trade.price}
                </TableCell>
                <TableCell>
                  {trade.quantity}
                </TableCell>
                <TableCell>
									{(new Date(trade.date)).toString().slice(4, 15)}
                </TableCell>
                <TableCell>
                  {trade.isBuy ? "BUY" : "SELL"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
	)
}

export default Portfolio