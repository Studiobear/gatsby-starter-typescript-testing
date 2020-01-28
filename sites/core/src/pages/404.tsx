import React from 'react'

import { Layout } from '@studiobear/shared-ui-ionic'
import SEO from '../components/seoData'

import { DeepPropertyAccess } from '@studiobear/shared-utils'

import { IPageQuery } from './index'

const { get } = DeepPropertyAccess

const NotFoundPage: React.SFC<IPageQuery> = ({ data }) => {
  const siteTitle = get(data, 'site', 'siteMetadata', 'title') || ''
  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage