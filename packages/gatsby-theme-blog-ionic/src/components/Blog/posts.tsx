import React from 'react'
import { Link } from 'gatsby'
import { IonText } from '@ionic/react'
import { rhythm } from '@studiobear/shared-ui-ionic'

export interface IPosts {
  location: string
  posts: any
  siteMetadata: any
  socialLinks: any
}

export const Posts = ({ location, posts, siteMetadata, socialLinks }) => (
  <>
    {posts.map(({ node }) => {
      const title = node.title || node.slug
      const keywords = node.keywords || []
      return (
        <li data-testid="blogItem" key={node.slug}>
          <article>
            <header>
              <IonText>
                <h2 style={{ marginBottom: rhythm(1 / 4) }}>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h2>
              </IonText>
              <small>{node.date}</small>
            </header>
            <section>
              <p />
              {node.excerpt}
            </section>
          </article>
        </li>
      )
    })}
  </>
)

export default Posts
