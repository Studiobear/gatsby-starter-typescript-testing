/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostPageQuery
// ====================================================

export interface PostPageQuery_site_siteMetadata_social {
  name: string | null;
  url: string | null;
}

export interface PostPageQuery_site_siteMetadata {
  title: string | null;
  social: (PostPageQuery_site_siteMetadata_social | null)[] | null;
}

export interface PostPageQuery_site {
  siteMetadata: PostPageQuery_site_siteMetadata | null;
}

export interface PostPageQuery_blogPost {
  id: string;
  excerpt: string;
  body: string;
  slug: string;
  title: string;
  tags: (string | null)[];
  keywords: (string | null)[];
  date: any;
}

export interface PostPageQuery_previous {
  id: string;
  excerpt: string;
  slug: string;
  title: string;
  date: any;
}

export interface PostPageQuery_next {
  id: string;
  excerpt: string;
  slug: string;
  title: string;
  date: any;
}

export interface PostPageQuery {
  site: PostPageQuery_site | null;
  blogPost: PostPageQuery_blogPost | null;
  previous: PostPageQuery_previous | null;
  next: PostPageQuery_next | null;
}

export interface PostPageQueryVariables {
  id: string;
  previousId?: string | null;
  nextId?: string | null;
}
