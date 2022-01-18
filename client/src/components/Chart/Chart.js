import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AreaChart, Area, LineChart, Line,	XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, Tooltip } from 'recharts'


const Chart = (props) => {

	const [margin, setMargin] = useState(15)
	
	const formatXAxis = (tickItem) => {
		const date = new Date(tickItem * 1000)
		return date.toLocaleString('default', { month: 'short'}) + ' ' + date.getDate()
	}

	const formatTooltip = (tickItem) => {
		const date = new Date(tickItem * 1000)
		return date.toLocaleString('default', { month: 'short'}) + ' ' + date.getDate() + ', ' + date.getFullYear()
	}
/*
	useEffect(() => {

		if (typeof props.data === 'undefined') return
		console.log('hi')
		console.log(props.data.reduce( (prev, cur) => cur.c > prev ? cur.c : prev))
		//console.log(5 * props.data.filter( (prev, cur) => cur > prev ? cur : prev).toString().length)
		//setMargin(5 * props.data.filter( (prev, cur) => cur > prev ? cur : prev).toString().length)
	}, [props])
	*/

	return (
		<AreaChart
			width={800}
			height={300}
			data={props.data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<defs>
				<linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
					<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
				</linearGradient>
			</defs>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="t" tickFormatter={formatXAxis}/>
			<YAxis width={margin} domain={[dataMin => (Math.floor(dataMin*0.98)), dataMax => (Math.floor(dataMax*1.02))]}/>
			<Tooltip labelFormatter={formatTooltip} formatter={(price) => price + ' USD'}/>
			<Area type="monotone" dataKey="c" stroke="#8884d8" dot={false} strokeWidth={2} fill="url(#colorPrice)"/>
		</AreaChart>
	)
}

export default Chart