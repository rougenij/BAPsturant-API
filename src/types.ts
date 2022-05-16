import { NextFunction, Request, Response } from 'express'

export interface IUser {
  userId: number
  phone: string
  password?: string
}

export interface ISessionObj {
  id: number
  phone: string
}

export interface Req extends Request {
  session: { user: ISessionObj; views: number }
}

export interface Res extends Response {
  session: { user: ISessionObj; views: number }
}

export interface Next extends NextFunction {}
