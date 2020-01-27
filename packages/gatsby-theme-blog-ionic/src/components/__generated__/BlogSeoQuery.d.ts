/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogSeoQuery
// ====================================================

export interface BlogSeoQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface BlogSeoQuery_site {
  siteMetadata: BlogSeoQuery_site_siteMetadata | null;
}

export interface BlogSeoQuery {
  site: BlogSeoQuery_site | null;
}
