import {ERoutes} from '../../routes/routes'
import {errorColor} from '../errorColor'
import {EHTTPMethods, TRouterHandler, TRouter, TRouterMethods} from './types'

class Router {
  endpoints: TRouter
  constructor() {
    this.endpoints = {} as TRouter
  }
  _request(
    method: EHTTPMethods = EHTTPMethods.GET,
    path: ERoutes,
    handler: TRouterHandler,
  ) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {} as TRouterMethods
    }
    const endpoint = this.endpoints[path] as TRouterMethods

    if (endpoint[method]) {
      const error = errorColor(`${[method]} по адресу ${path} уже существует`)
      throw new Error(error)
    }
    endpoint[method] = handler
  }
  get(path: ERoutes, handler: TRouterHandler) {
    this._request(EHTTPMethods.GET, path, handler)
  }
  post(path: ERoutes, handler: TRouterHandler) {
    this._request(EHTTPMethods.POST, path, handler)
  }
  update(path: ERoutes, handler: TRouterHandler) {
    this._request(EHTTPMethods.UPDATE, path, handler)
  }
  delete(path: ERoutes, handler: TRouterHandler) {
    this._request(EHTTPMethods.DELETE, path, handler)
  }
}

export default Router
