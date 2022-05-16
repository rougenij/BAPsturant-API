import express from 'express'
import authControllers from './items.controllers'
import authMiddlewares from '@/middlewares/auth'

const router = express.Router()

router.get('/test', authControllers.test)

// router.use(authMiddlewares.checkAuth)

export default router
