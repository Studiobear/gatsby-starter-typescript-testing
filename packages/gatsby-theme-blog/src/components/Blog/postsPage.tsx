import React from 'react'
import loadable from '@loadable/component'

const PostsPageBody = loadable(() => import('./postsPageBody'), {
  fallback: <div>Loading...</div>,
})

export const PostsPage = props => <PostsPageBody {...props} />

export default PostsPage
