import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const INITIAL_CASH = 1000000

dotenv.config()

const SECRET = process.env.SECRET

export const signin = async (req, res) => {
	const { email, password } = req.body //Coming from formData
	try {
		const existingUser = await User.findOne({ email })

		if(!existingUser) return res.status(404).json({ message: "User doesn't exist" })

		const isPasswordCorrect  = await bcrypt.compare(password, existingUser.password)

		if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

		//If credentials are valid, create a token for the user
		const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET, { expiresIn: "1h" })
		//Then send the token to the client/frontend
		res.status(200).json({ result: existingUser, token })

	} catch (error) {
		res.status(500).json({ message: "Something went wrong"})
	}
}

export const signup = async (req, res) => {
	const {firstName, lastName, email, password, confirmPassword} = req.body // From formData
	try {

		const existingUser = await User.findOne({ email })

		if (existingUser) return res.status(400).json({ message: "User already Exists"})

		if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match" })
		
		const hashedPassword = await bcrypt.hash(password, 12)

		const result = User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`, cash: INITIAL_CASH, assets: [] })

		const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {expiresIn: "1h"})

		res.status(200).json({ result, token })
	} catch (error) {
		res.status(500).json({ message: "something went wrong" })
	}

}
