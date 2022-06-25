import {ERoutes} from '../../routes/routes'
import EventEmitter from 'events'
import http from 'http'
import Router from '../router/router'
import {EHTTPMethods, TRouterHandler} from '../router/types'

class Server {
  server: http.Server
  emmiter: EventEmitter
  middlewares: TRouterHandler[]
  constructor() {
    this.server = this._createServer()
    this.emmiter = new EventEmitter()
    this.middlewares = []
  }
  use(middleware: any) {
    this.middlewares.push(middleware)
  }
  _createServer() {
    return http.createServer((req, res) => {
      let body = ''
      req.on('data', chank => {
        body += chank
      })
      req.on('end', () => {
        if (body) {
          //@ts-ignore
          req.body = JSON.parse(body)
        }
        //@ts-ignore
        this.middlewares.forEach(middleware => middleware(req, res))
        //@ts-ignore

        console.log(req.pathname)

        const emitted = this.emmiter.emit(
          this._getRouteMask(
            //@ts-ignore
            req.pathname as ERoutes,
            req.method as EHTTPMethods,
          ),
          req,
          res,
        )
        if (!emitted) {
          res.end('Такой адрес не существует')
        }
      })
    })
  }

  addRouter(router: Router) {
    const endpointsRouts = Object.keys(router.endpoints) as ERoutes[]
    endpointsRouts.forEach(path => {
      const endpoint = router.endpoints[path]
      const endpointMethods = Object.keys(endpoint) as EHTTPMethods[]
      endpointMethods.forEach(method => {
        const handler = endpoint[method]
        this.emmiter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res)
        })
      })
    })
  }

  _getRouteMask(path: ERoutes, method: EHTTPMethods) {
    return `[${path}]:[${method}]`
  }
  listen(PORT: string | number) {
    this.server.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`)
    })
  }
}

export default Server
