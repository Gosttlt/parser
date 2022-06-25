import {ERoutes} from '../../routes/routes'
import {IServerResponse, IIncomingMessage} from '../server/types'

export enum EHTTPMethods {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}
export type TRouterHandler = (
  req: IIncomingMessage,
  res: IServerResponse,
) => void

export type TRouter = {
  [key in ERoutes]: TRouterMethods
}

export type TRouterMethods = {
  [key in EHTTPMethods]: TRouterHandler
}
