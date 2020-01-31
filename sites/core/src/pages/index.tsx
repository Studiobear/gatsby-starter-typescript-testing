import React from 'react'
import { graphql } from 'gatsby'
import loadable from '@loadable/component'

import { IndexPageQuery } from './__generated__/IndexPageQuery'

export interface IPageQuery {
  data: IndexPageQuery
}

const IndexBody = loadable(() => import('../components/indexPageBody'), {
  fallback: <div>Loading...</div>,
})

export const IndexPage = (props: IPageQuery) => <IndexBody {...props} />

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      ...SiteInformation
    }
  }
`
