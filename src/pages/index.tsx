import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { DeepPropertyAccess } from '../utils/deep-property-access'

const { get } = DeepPropertyAccess

export interface IPageQuery {
  data: any
}

const IndexPage: React.SFC<IPageQuery> = ({ data }) => {
  const siteTitle = get(data, 'site', 'sitemetadata', 'title') || ''
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
