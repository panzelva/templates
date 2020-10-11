import { FastifyPluginCallback } from 'fastify'
import { createPost } from './createPost/createPost'
import createPostBody from './createPost/createPostBody.schema.json'
import createPostHeaders from './createPost/createPostHeaders.schema.json'
import createPostParams from './createPost/createPostParams.schema.json'
import createPostQuerystring from './createPost/createPostQuerystring.schema.json'
import { getPost } from './getPost/getPost'
import { getPosts } from './getPosts/getPosts'

const routes: FastifyPluginCallback = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getPosts,
  })

  fastify.route({
    method: 'GET',
    url: '/:postId',
    handler: getPost,
  })

  fastify.route({
    method: 'POST',
    url: '/',
    handler: createPost,
    schema: {
      body: createPostBody,
      headers: createPostHeaders,
      params: createPostParams,
      querystring: createPostQuerystring,
    },
  })
}

export default routes
