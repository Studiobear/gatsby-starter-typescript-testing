/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImagePlaceholderQuery
// ====================================================

export interface ImagePlaceholderQuery_placeholderImage_childImageSharp_fluid {
  src: string;
  srcSet: string;
  aspectRatio: number;
  sizes: string;
  base64: string | null;
}

export interface ImagePlaceholderQuery_placeholderImage_childImageSharp {
  fluid: ImagePlaceholderQuery_placeholderImage_childImageSharp_fluid | null;
}

export interface ImagePlaceholderQuery_placeholderImage {
  childImageSharp: ImagePlaceholderQuery_placeholderImage_childImageSharp | null;
}

export interface ImagePlaceholderQuery {
  placeholderImage: ImagePlaceholderQuery_placeholderImage | null;
}
