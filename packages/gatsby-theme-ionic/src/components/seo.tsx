/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

// import { SeoQuery } from './__generated__/SeoQuery';
import { DeepPropertyAccess } from '@studiobear/core/utils/deep-property-access'
import labels from '@studiobear/core/content/website/labels'

interface SEOProps {
  siteMeta: {
    description?: string
    title: string
    author?: string
    lang: string
  }
  pageMeta: {
    description?: string
    author?: string
    title?: string
  }
  meta: any[]
}

const SEO: React.FC<SEOProps> = ({ siteMeta, pageMeta, meta }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={pageTitle}
    titleTemplate={`%s | ${siteTitle}`}
    meta={[
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: pageTitle,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: siteAuthor,
      },
      {
        name: `twitter:title`,
        content: pageTitle,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ].concat(meta)}
  />
)

export default SEO
