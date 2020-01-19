/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
interface SEOProps {
    siteMeta: {
        description?: string;
        title: string;
        author?: string;
        lang: string;
    };
    pageMeta: {
        description?: string;
        author?: string;
        title?: string;
    };
    meta: any[];
}
declare const SEO: React.FC<SEOProps>;
export default SEO;
