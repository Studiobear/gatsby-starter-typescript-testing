import React from 'react'

import { Layout } from '@studiobear/shared-ui-ionic'
import SEO from '../components/seoData'

import { DeepPropertyAccess } from '@studiobear/shared-utils'

import { IPageQuery } from '../pages'

const { get } = DeepPropertyAccess

const indexPageBody: React.SFC<IPageQuery> = ({ data }) => {
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

export default indexPageBody
