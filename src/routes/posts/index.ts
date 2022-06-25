import Router from '../../utils/router/router'
import {ERoutes} from '../routes'
import {addPosts, getPosts} from './controller'

export const postRouter = new Router()

export const posts = [
  {name: 'Petya', text: 'hi i Petya'},
  {name: 'Vasya', text: 'hi i Vasya'},
]

postRouter.get(ERoutes.POSTS, getPosts)
postRouter.post(ERoutes.POSTS, addPosts)
