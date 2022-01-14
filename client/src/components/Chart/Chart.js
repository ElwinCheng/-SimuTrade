import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LineChart, Line,	XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, Tooltip } from 'recharts'


const Chart = (props) => {
	
	const formatXAxis = (tickItem) => {
		const date = new Date(tickItem * 1000)
		return date.toLocaleString('default', { month: 'short'}) + ' ' + date.getDate()
	}

	const formatTooltip = (tickItem) => {
		const date = new Date(tickItem * 1000)
		return date.toLocaleString('default', { month: 'short'}) + ' ' + date.getDate() + ', ' + date.getFullYear()
	}

	return (
			<LineChart
				width={700}
				height={300}
				data={props.data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="t" tickFormatter={formatXAxis}/>
				<YAxis domain={[dataMin => (Math.floor(dataMin*0.98)), dataMax => (Math.floor(dataMax*1.02))]}/>
				<Tooltip labelFormatter={formatTooltip} formatter={(price) => price + ' USD'}/>
				<Line type="monotone" dataKey="c" stroke="#8884d8" dot={false} strokeWidth={2}/>
			</LineChart>
	)
}

export default Chart