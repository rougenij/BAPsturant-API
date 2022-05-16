import { Req, Res, Next } from '@/types'
import ApiError from '@/utils/ApiError'
import catchAsync from '@/utils/catchAsync'
import httpStatus from 'http-status'

const checkAuth = catchAsync((req: Req, res: Res, next: Next) => {
  if (req.session.user) {
    next()
  } else {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized')
  }
})

export default {
  checkAuth
}
