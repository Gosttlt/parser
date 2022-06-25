import {ERoutes} from '../../routes/routes'
import {IIncomingMessage, IServerResponse} from './types'

export const parserJson = (req: IIncomingMessage, res: IServerResponse) => {
  res.send = (data: any) => {
    res.writeHead(200, {
      'Content-type': 'application/json',
    })
    res.end(JSON.stringify(data))
  }
}
// export const parserBody = (req: IIncomingMessage, res: IServerResponse) => {
//   let body = ''
//   req.on('data', chank => {
//     body += chank
//   })
//   req.on('end', () => {
//     if (body) {
//       req.body = JSON.parse(body)
//     }
//   })
// }

export const parseUrl =
  (baseUrl: string) => (req: IIncomingMessage, res: IServerResponse) => {
    if (req.url) {
      const parsedUrl = new URL(req.url, baseUrl)
      const params: {[key: string]: string} = {}
      parsedUrl.searchParams.forEach((value, key) => (params[key] = value))
      req.pathname = parsedUrl.pathname as ERoutes
      req.params = params
    }
  }
