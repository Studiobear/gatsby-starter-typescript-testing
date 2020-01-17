/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SEO } from '@studiobear/gatsby-theme-ionic'

import { DeepPropertyAccess } from '../utils/deep-property-access'
import labels from '../content/website/labels'

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

  const helmetContext = {}

  const siteDescription = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'description') || labels.notAvailable
  const siteTitle = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'title') || labels.notAvailable
  const siteAuthor = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'author') || labels.notAvailable

  const metaDescription = description || siteDescription
  const pageTitle = title || ''

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
