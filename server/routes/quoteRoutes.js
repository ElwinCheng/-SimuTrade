import express from 'express'
import { getQuote, getQuery, getDailyHistory, getCompanyProfile } from '../controllers/quotes.js'

const router = express.Router()

router.get('/quote', getQuote)
router.get('/query', getQuery)
router.get('/history', getDailyHistory)
router.get('/profile', getCompanyProfile)

export default router