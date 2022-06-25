import {postRouter} from './routes/posts'
import Server from './utils/server'

import {parserJson, parseUrl} from './utils/server/middlewares'
import {getStarted} from './parser'
const PORT = 3000

const server = new Server()
server.use(parserJson)
server.use(parseUrl('http://localhost:3000'))

server.addRouter(postRouter)

server.listen(PORT)
getStarted().then((info: any) => console.log(info))
