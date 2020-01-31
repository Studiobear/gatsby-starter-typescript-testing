import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '@studiobear/shared-ui-ionic'
import SEO from '../components/seoData'

import { DeepPropertyAccess } from '@studiobear/shared-utils'

import { IPageQuery } from '../pages'

const { get } = DeepPropertyAccess

const secondPageBody: React.SFC<IPageQuery> = ({ data }) => {
  const siteTitle = get(data, 'site', 'siteMetadata', 'title') || ''
  return (
    <Layout title={siteTitle}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default secondPageBody
