import React from 'react'
import loadable from '@loadable/component'

const PostPageBody = loadable(() => import('./postPageBody'), {
  fallback: <div>Loading...</div>,
})

export const PostPage = props => <PostPageBody {...props} />

export default PostPage
