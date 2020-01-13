/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SiteInformation
// ====================================================

export interface SiteInformation_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface SiteInformation {
  __typename: "Site";
  siteMetadata: SiteInformation_siteMetadata | null;
}
