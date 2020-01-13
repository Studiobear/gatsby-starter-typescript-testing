import React from 'react'
import labels from '../../../content/website/labels'
import { DeepPropertyAccess } from '../../utils/deep-property-access'
import { INode } from '../../gatsby/create-pages'

import BlogItem from './blog-item'

const { get } = DeepPropertyAccess

interface IBlogList {
  posts: any
}

const BlogList = ({ posts }: IBlogList) => {
  return (
    <ul>
      {posts.map(({ node }: INode) => {
        const title = get(node, 'frontmatter', 'title') || labels.notAvailable,
          slug = get(node, 'fields', 'slug') || labels.notAvailable,
          date = get(node, 'frontmatter', 'published') || labels.notAvailable,
          excerpt = get(node, 'excerpt') || ''

        return <BlogItem title={title} slug={slug} date={date} excerpt={excerpt} />
      })}
    </ul>
  )
}

export default BlogList
