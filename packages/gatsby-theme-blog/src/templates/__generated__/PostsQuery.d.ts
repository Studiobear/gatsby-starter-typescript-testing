/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsQuery
// ====================================================

export interface PostsQuery_site_siteMetadata_social {
  name: string | null;
  url: string | null;
}

export interface PostsQuery_site_siteMetadata {
  title: string | null;
  social: (PostsQuery_site_siteMetadata_social | null)[] | null;
}

export interface PostsQuery_site {
  siteMetadata: PostsQuery_site_siteMetadata | null;
}

export interface PostsQuery_allBlogPost_edges_node {
  id: string;
  excerpt: string;
  slug: string;
  title: string;
  date: any;
  tags: (string | null)[];
}

export interface PostsQuery_allBlogPost_edges {
  node: PostsQuery_allBlogPost_edges_node;
}

export interface PostsQuery_allBlogPost {
  edges: PostsQuery_allBlogPost_edges[];
}

export interface PostsQuery {
  site: PostsQuery_site | null;
  allBlogPost: PostsQuery_allBlogPost;
}
