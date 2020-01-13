/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPageQuery
// ====================================================

export interface BlogPageQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface BlogPageQuery_site {
  __typename: "Site";
  siteMetadata: BlogPageQuery_site_siteMetadata | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  published: any | null;
  title: string | null;
  description: string | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: BlogPageQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: BlogPageQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: BlogPageQuery_allMarkdownRemark_edges_node;
}

export interface BlogPageQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: BlogPageQuery_allMarkdownRemark_edges[];
}

export interface BlogPageQuery {
  site: BlogPageQuery_site | null;
  allMarkdownRemark: BlogPageQuery_allMarkdownRemark;
}
