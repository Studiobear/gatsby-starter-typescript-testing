import React from "react"
import { Link, graphql } from 'gatsby';

import labels from '../../content/website/labels';
import { DeepPropertyAccess } from '../utils/deep-property-access';
import { INode } from '../gatsby/create-pages'
import { rhythm } from '../utils/typography';

// import { BlogPageQuery } from './__generated__/BlogPageQuery';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import {
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

// import { compass } from 'ionicons/icons';

const { get } = DeepPropertyAccess;

interface IPageQuery {
  data: any;
}

const rawMarkup = (html: string | undefined) => html

const BlogPage = ({ data }: IPageQuery) => {
  const posts = get(data, 'allMarkdownRemark', 'edges') || [];

  return (
  <Layout>
    <SEO title="Blog" />
    <IonGrid>
      <IonRow>
        <IonCol>
          <h1>Welcome to the Blog</h1>
    {posts.map(({ node }: INode) => {
          const title = get(node, 'frontmatter', 'title') || labels.notAvailable,
            slug = get(node, 'fields', 'slug') || labels.notAvailable,
            date = get(node, 'frontmatter', 'published') || labels.notAvailable,
            description = get(node, 'frontmatter', 'description') || '',
            excerpt = rawMarkup(get (node, 'excerpt'))

          return (
            <article key={slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={slug}>
                    {title}
                  </Link>
                </h3>
                <small>{date}</small>
              </header>
              <section>
                <p/>
                {excerpt}
              </section>
            </article>
          );
        })}
        </IonCol>
      </IonRow>
    </IonGrid>
    
  </Layout>
)}

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            published(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
