/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SEO } from '@studiobear/shared-ui-ionic'

import { DeepPropertyAccess } from '@studiobear/shared-utils'

interface IProps {
  description?: string
  lang?: string
  meta?: any[] // eslint-disable-line
  title: string
  author?: string
}

const SEOData: React.FC<IProps> = ({ description = ``, lang = `en`, meta = [], title }) => {
  const data = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const siteDescription = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'description') || 'N/A'
  const siteTitle = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'title') || 'N/A'
  const siteAuthor = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'author') || 'N/A'

  const siteMeta = {
    description: siteDescription,
    title: siteTitle,
    author: siteAuthor,
    lang,
  }

  const pageMeta = {
    description: description,
    title: title,
    meta,
  }

  return <SEO siteMeta={siteMeta} pageMeta={pageMeta} meta={meta} />
}

export default SEOData
