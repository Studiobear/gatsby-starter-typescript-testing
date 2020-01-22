import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO, DeepPropertyAccess } from '@studiobear/share-ui-ionic'
import { IonGrid, IonRow, IonCol } from '@ionic/react'

import { BlogPageQuery } from './__generated__/BlogPageQuery'
import { BlogList } from '../components/blog/blog-list'

const { get } = DeepPropertyAccess

export interface IBlogQuery {
  data: BlogPageQuery
}

const BlogPage: React.SFC<IBlogQuery> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const siteTitle = get(data, 'site', 'siteMetadata', 'title') || ''

  return (
    <Layout title={siteTitle}>
      <SEO title="Blog" />
      <IonGrid>
        <IonRow>
          <IonCol id="content">
            <h1>Welcome to the Blog</h1>
            <section>
              <BlogList edges={posts} />
            </section>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery {
    site {
      ...SiteInformation
    }
    allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }) {
      ...AllPosts
    }
  }
`
