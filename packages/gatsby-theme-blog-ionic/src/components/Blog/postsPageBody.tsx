import React from 'react'
import { Layout } from '@studiobear/shared-ui-ionic'
import { WindowLocation } from '@reach/router'
import { PostsQuery } from '../../templates/__generated__/PostsQuery'

import SEO from '../seoData'
import Posts from './posts'

interface IPostPage {
  data: {
    location: WindowLocation
    data: PostsQuery
  }
}

export const PostsPageBody = ({ location, data }) => {
  console.log(data)
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

export default PostsPageBody
