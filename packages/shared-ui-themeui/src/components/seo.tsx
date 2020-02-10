/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet-async'

export interface SEOProps {
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

export const SEO: React.FC<SEOProps> = ({ siteMeta, pageMeta, meta }) => (
  <Helmet
    htmlAttributes={{
      lang: siteMeta.lang,
    }}
    title={pageMeta.title}
    titleTemplate={`%s | ${siteMeta.title}`}
    meta={[
      {
        name: `description`,
        content: siteMeta.description,
      },
      {
        property: `og:title`,
        content: pageMeta.title,
      },
      {
        property: `og:description`,
        content: siteMeta.description,
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
        content: siteMeta.author,
      },
      {
        name: `twitter:title`,
        content: pageMeta.title,
      },
      {
        name: `twitter:description`,
        content: pageMeta.description,
      },
    ].concat(meta)}
  />
)

export default SEO
