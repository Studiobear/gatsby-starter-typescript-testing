/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AllPosts
// ====================================================

export interface AllPosts_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface AllPosts_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  published: any | null;
  title: string | null;
  description: string | null;
}

export interface AllPosts_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: AllPosts_edges_node_fields | null;
  frontmatter: AllPosts_edges_node_frontmatter | null;
}

export interface AllPosts_edges {
  __typename: "MarkdownRemarkEdge";
  node: AllPosts_edges_node;
}

export interface AllPosts {
  __typename: "MarkdownRemarkConnection";
  edges: AllPosts_edges[];
}
