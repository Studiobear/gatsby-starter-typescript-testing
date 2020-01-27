import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@studiobear/shared-ui-ionic'
import SEO from '../components/seoData'

import { DeepPropertyAccess } from '@studiobear/shared-utils'

import { IndexPageQuery } from './__generated__/IndexPageQuery'

const { get } = DeepPropertyAccess

export interface IPageQuery {
  data: IndexPageQuery
}

const IndexPage: React.SFC<IPageQuery> = ({ data }) => {
  const siteTitle = get(data, 'site', 'siteMetadata', 'title') || ''
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <div id="content">
        <h1>Welcome to Your Gatsby Ionic Starter</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      ...SiteInformation
    }
  }
`
