import express from 'express'
import authControllers from './items.controllers'
import authMiddlewares from '@/middlewares/auth'

const router = express.Router()

router.get('/', authControllers.test)
router.post('/item', authControllers.singleItem)
router.post('/order-items', authControllers.getItemsOfOrder)

// router.use(authMiddlewares.checkAuth)

export default router
