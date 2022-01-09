import express from 'express'
import { getQuote, getQuery } from '../controllers/quotes.js'

const router = express.Router()

router.get('/quote', getQuote)
router.get('/query', getQuery)

export default router