import express from 'express'
import { buyStock, sellStock, getTrades } from '../controllers/trades.js'

const router = express.Router()

router.post('/buy', buyStock)
router.post('/sell', sellStock)
router.get('/trades', getTrades)

export default router


