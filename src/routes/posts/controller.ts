import {posts} from '.'
import {TRouterHandler} from '../../utils/router/types'

export const getPosts: TRouterHandler = (req, res) => {
  res.send(posts)
}

export const addPosts: TRouterHandler = (req, res) => {
  const post = req.body
  posts.push(post)
  res.send(posts)
}
