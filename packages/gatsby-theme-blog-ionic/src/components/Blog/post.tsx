import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IonText } from '@ionic/react'
import { Layout } from '@studiobear/shared-ui-ionic'

import SEO from '../seoData'

export const PostLayout = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  previous,
  next,
}) => (
  <Layout title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main id="content">
      <IonText color="primary">
        <h1>{post.title}</h1>
      </IonText>
      <IonText color="primary">
        <p>{post.date}</p>
      </IonText>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
  </Layout>
)

export default PostLayout
