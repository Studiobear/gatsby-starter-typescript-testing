import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IonText } from '@ionic/react'
import { Layout } from '@studiobear/shared-ui-ionic'

import SEO from '../seoData'
import Posts from './posts'

export const PostsPage = ({ location, data }) => {
  const { site, allBlogPost } = data
  return (
    <Layout title={site.title}>
      <SEO title={site.title} description="Blog page" />
      <main id="content">
        <Posts
          location={location}
          posts={allBlogPost.edges}
          siteMetadata={site.siteMetadata}
          socialLinks={site.siteMetadata.social}
        />
      </main>
    </Layout>
  )
}

export default PostsPage
