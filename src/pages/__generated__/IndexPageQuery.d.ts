/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface IndexPageQuery_site {
  __typename: "Site";
  siteMetadata: IndexPageQuery_site_siteMetadata | null;
}

export interface IndexPageQuery {
  site: IndexPageQuery_site | null;
}
