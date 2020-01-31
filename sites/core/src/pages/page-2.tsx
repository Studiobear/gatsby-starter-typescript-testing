import React from 'react'
import loadable from '@loadable/component'

import { IPageQuery } from './index'

const Page2Body = loadable(() => import('../components/page2Body'), {
  fallback: <div>Loading...</div>,
})

export const SecondPage = (props: IPageQuery) => <Page2Body {...props} />

export default SecondPage
