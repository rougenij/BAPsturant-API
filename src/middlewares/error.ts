import httpStatus from 'http-status'
import { environment } from '../config'
import serverErrorLogger from '../utils/logger'
import ApiError from '../utils/ApiError'
import { Request, Response, NextFunction } from 'express'

export const errorConverter = (err: any, req, res, next: NextFunction) => {
  let error = err

  // if the error is of not instanceof ApiError then apply create an ApiError instance and return
  // that as the new error to the error handler
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode
      ? httpStatus.BAD_REQUEST
      : httpStatus.INTERNAL_SERVER_ERROR

    const message = error.message || httpStatus[statusCode]

    error = new ApiError(statusCode, message, err.stack)
  }

  next(error)
}

export const errorHandler = (err, req, res, next: NextFunction) => {
  let { statusCode, message } = err

  if (environment === 'production') {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR

    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR]
  }

  res.locals.errorMessage = err.message

  const response = {
    code: statusCode,
    message,
    ...(environment === 'development' && { info: err.info }),
    ...(environment === 'development' && { stack: err.stack })
  }

  if (environment === 'development') {
    serverErrorLogger.error(response)
  }

  res.status(statusCode).send(response)
}
