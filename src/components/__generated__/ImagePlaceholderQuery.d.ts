/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImagePlaceholderQuery
// ====================================================

export interface ImagePlaceholderQuery_placeholderImage_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ImagePlaceholderQuery_placeholderImage_childImageSharp {
  __typename: "ImageSharp";
  fluid: ImagePlaceholderQuery_placeholderImage_childImageSharp_fluid | null;
}

export interface ImagePlaceholderQuery_placeholderImage {
  __typename: "File";
  childImageSharp: ImagePlaceholderQuery_placeholderImage_childImageSharp | null;
}

export interface ImagePlaceholderQuery {
  placeholderImage: ImagePlaceholderQuery_placeholderImage | null;
}
