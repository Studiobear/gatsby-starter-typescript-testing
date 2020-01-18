import React from 'react'
import { Link } from 'gatsby'

import Layout from '@studiobear/gatsby-theme-ionic/src/layouts'
import SEO from '../components/seoData'

import { DeepPropertyAccess } from '../utils/deep-property-access'

import { IPageQuery } from './index'

const { get } = DeepPropertyAccess

const SecondPage: React.SFC<IPageQuery> = ({ data }) => {
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

export default SecondPage
