import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../../utils/typography'

interface IBlogItem {
  title: string
  slug: string
  date: string
  excerpt: string
}

const BlogItem = ({ title, slug, date, excerpt }: IBlogItem) => (
  <li>
    <article key={slug}>
      <header>
        <h2
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={slug}>
            {title}
          </Link>
        </h2>
        <small>{date}</small>
      </header>
      <section>
        <p />
        {excerpt}
      </section>
    </article>
  </li>
)

export default BlogItem
