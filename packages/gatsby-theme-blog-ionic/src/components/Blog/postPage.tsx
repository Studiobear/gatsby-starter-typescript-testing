import React from 'react'
import { Layout } from '@studiobear/shared-ui-ionic'
import { WindowLocation } from '@reach/router'

import SEO from '../seoData'
import Post from './post'
import {
  PostPageQuery_blogPost,
  PostPageQuery_site,
  PostPageQuery_previous,
  PostPageQuery_next,
} from '../../templates/__generated__/PostPageQuery'

interface IPostPage {
  location: WindowLocation
  data: {
    blogPost: PostPageQuery_blogPost
    site: PostPageQuery_site
    previous: PostPageQuery_previous
    next: PostPageQuery_next
  }
}

export const PostPage = ({ location, data: { blogPost, site, previous, next } }: IPostPage) => {
  console.log(location, blogPost, site, previous, next)
  return (
    <Layout title={site.siteMetadata.title} defaultHref="/blog">
      <SEO title={site.siteMetadata.title} description={blogPost.excerpt} />
      <main id="content">
        <Post title={blogPost.title} date={blogPost.date} body={blogPost.body} />
      </main>
    </Layout>
  )
}

export default PostPage
