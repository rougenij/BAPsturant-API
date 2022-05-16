export interface ApiErrorType extends Error {
  statusCode: number
}

class ApiError extends Error {
  constructor(statusCode: number, message: string, stack: string = '', info?: any) {
    super(message)

    this.statusCode = statusCode
    this.info = info

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  statusCode: number
  info?: any
}

export default ApiError
