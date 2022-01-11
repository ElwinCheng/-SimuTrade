import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LineChart, Line,	XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, Tooltip } from 'recharts'


const Chart = (props) => {
	
	const formatXAxis = (tickItem) => {
		const date = new Date(tickItem)
		return date.toLocaleString('default', { month: 'short'}) + ' ' + date.getDate()
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
				<XAxis dataKey="date" tickFormatter={formatXAxis}/>
				<YAxis domain={[dataMin => (Math.floor(dataMin*0.98)), dataMax => (Math.floor(dataMax*1.02))]}/>
				<Tooltip />
				<Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} strokeWidth={2}/>
			</LineChart>
	)
}

export default Chart