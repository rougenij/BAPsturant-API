import authService from './items.services'
import catchAsync from '../../utils/catchAsync'
import logger from '@/utils/logger'
import { isDev } from '@/config'
import { Req, Res } from '@/types'
import ApiError from '@/utils/ApiError'
import httpStatus from 'http-status'

// admin login
const test = catchAsync(async (req: Req, res: Res) => {
  return res.status(httpStatus.OK).json({
    message: 'test'
  })
})

const singleItem = catchAsync(async (req: Req, res: Res) => {
  const { id } = req.body
  const result = await authService.singleItems(id)
  return res.status(httpStatus.OK).json(result)
})

const getItemsOfOrder = catchAsync(async (req: Req, res: Res) => {
  const { orderid } = req.body
  return res
    .status(httpStatus.OK)
    .json(await authService.itemsFromOrder(orderid))
})

export default { test, singleItem, getItemsOfOrder }
