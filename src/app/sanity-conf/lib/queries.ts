import { Locale } from '@lib/i18n';
import { groq, defineQuery } from 'next-sanity';

/** Navigation */
export const mainMenuQuery =
  defineQuery(`*[_type == "navigation" && navId.current == "main-menu"][0] { 
  items,
  "pages": items[].navigationItemLink.internalLink->{
    _id,
    _type,
    slug
  },
  "subpages": items[].navigationItemLink.submenu[].navigationItemLink.internalLink->{
    _id,
    _type,
    slug
  }
}`);
export const footerMenuQuery =
  defineQuery(`*[_type == "navigation" && navId.current == "footer-menu"][0] { 
  items,
  "pages": items[].navigationItemLink.internalLink->{
    _id,
    _type,
    slug
  },
  "subpages": items[].navigationItemLink.submenu[].navigationItemLink.internalLink->{
    _id,
    _type,
    slug
  }
}`);

/** Pages */
export const pageSlugsQuery = defineQuery(`*[_type == "page"] {
  slug
}`);

export const preparePageQuery = (
  locale: Locale
) => `*[_type == "page" && slug[$locale].current == $slug][0] {
  title{${locale}},
  body[]{${locale}},
  "pageImage": {
    "url": mainImage.asset->url,
    "dimensions": mainImage.asset->metadata.dimensions
  }
}`;

/** Posts */
export const postSlugsQuery = defineQuery(`*[_type == "post"] {
  slug
}`);

export const preparePostsQuery = (locale: Locale) => `*[_type == "post"] {
  _id,
  _type,
  title{${locale}},
  slug{${locale}},
  "pageImage": {
    "url": mainImage.asset->url,
    "dimensions": mainImage.asset->metadata.dimensions
  }
}`;

export const preparePostQuery = (
  locale: Locale
) => `*[_type == "post" && slug[$locale].current == $slug][0] {
  title{${locale}},
  body{${locale}},
  "pageImage": {
    "url": mainImage.asset->url,
    "dimensions": mainImage.asset->metadata.dimensions
  }
}`;

/* Not used yet */
export const languagesAvailableQuery =
  defineQuery(`*[_type == "languagesAvailable"][0] {
  languages,
  langDefault
}`);
