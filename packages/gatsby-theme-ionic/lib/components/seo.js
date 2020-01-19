"use strict";
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_helmet_async_1 = require("react-helmet-async");
const SEO = ({ siteMeta, pageMeta, meta }) => (react_1.default.createElement(react_helmet_async_1.Helmet, { htmlAttributes: {
        lang: siteMeta.lang,
    }, title: pageMeta.title, titleTemplate: `%s | ${siteMeta.title}`, meta: [
        {
            name: `description`,
            content: siteMeta.description,
        },
        {
            property: `og:title`,
            content: pageMeta.title,
        },
        {
            property: `og:description`,
            content: siteMeta.description,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: `summary`,
        },
        {
            name: `twitter:creator`,
            content: siteMeta.author,
        },
        {
            name: `twitter:title`,
            content: pageMeta.title,
        },
        {
            name: `twitter:description`,
            content: pageMeta.description,
        },
    ].concat(meta) }));
exports.default = SEO;
//# sourceMappingURL=seo.js.map