import React from 'react'
import loadable from '@loadable/component'

import { IPageQuery } from './index'

const Page404Body = loadable(() => import('../components/404Body'), {
  fallback: <div>Loading...</div>,
})

export const NotFoundPage = (props: IPageQuery) => (
  <div>
    <Page404Body {...props} />
  </div>
)

export default NotFoundPage
