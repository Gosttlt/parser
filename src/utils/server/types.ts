import {IncomingMessage, ServerResponse} from 'http'
import {ERoutes} from '../../routes/routes'

export interface IServerResponse extends ServerResponse {
  send(data: any): void
}
export interface IIncomingMessage extends IncomingMessage {
  body: any
  pathname: ERoutes
  params: {[key: string]: string}
}
