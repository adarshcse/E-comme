import express from 'express'
const router=express.Router()
import {registerController,loginController} from '../controllers/authController.js'
// post method
router.post('/register',registerController)
router.post('/login',loginController)
export default router