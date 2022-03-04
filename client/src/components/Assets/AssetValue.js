import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as api from '../../api/index'

const AssetValue = ({message = ""}) => {
	const [assetValue, setAssetValue] = useState(0)

	const assets = useSelector(state => state?.auth?.authData?.assets)

	const getAssetsValue = async () => {
		let value = 0
		for (const [symbol, quantity] of Object.entries(assets)) {
			const { data: { data } } = await api.quote(symbol)
			value += data.c * quantity
		}
		setAssetValue(value)
	}
	useEffect(() => {
		getAssetsValue()
		const timer = setInterval(getAssetsValue, 10000)
		return () => clearTimeout(timer)
	}, [assets])

	return (
		<p>{message + assetValue.toFixed(2)}</p>
	)
}

export default AssetValue