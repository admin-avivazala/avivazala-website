'use server';
import {
  mainMenuQuery,
  pageSlugsQuery,
  postSlugsQuery,
  preparePostsQuery,
  preparePageQuery,
  preparePostQuery,
  footerMenuQuery
} from './queries';
import { LocaleSlug, Post } from 'types/sanity.types';
import { FullNavigation, WebPage } from 'types/extended-sanity.types';
import { Locale } from '@lib/i18n';
import { loadQuery } from './store';

/** Navigation */
export const loadMainMenu = () => loadQuery<FullNavigation>(mainMenuQuery);
// export const getMainMenu = () => sanityFetch<FullNavigation>({ query: mainMenuQuery });
export const loadFooterMenu = () => loadQuery<FullNavigation>(footerMenuQuery);

/** Pages */
export const loadPageSlugs = () =>
  loadQuery<{ slug: LocaleSlug }[]>(pageSlugsQuery);
// export const getPageSlugs = () => sanityFetch<{ slug: LocaleSlug; }[]>({ query: pageSlugsQuery });

export const loadPage = (locale: Locale, slug: string) =>
  loadQuery<WebPage>(preparePageQuery(locale), { locale, slug });
// export const getPage = (locale: Locale, slug: string) => sanityFetch<WebPage>({ query: preparePageQuery(locale), params: { locale, slug } });

/** Posts */
export const loadPostSlugs = () =>
  loadQuery<{ slug: LocaleSlug }[]>(postSlugsQuery);
// export const getPostSlugs = () => sanityFetch<{ slug: LocaleSlug; }[]>({ query: postSlugsQuery });

export const loadPosts = (locale: Locale, isDraftMode = false) =>
  loadQuery<Post[]>(
    preparePostsQuery(locale),
    { locale },
    { perspective: isDraftMode ? 'previewDrafts' : 'published' }
  );
// export const getPosts = () => sanityFetch<Post[]>({ query: postsQuery });

export const loadPost = (locale: Locale, slug: string, isDraftMode = false) =>
  loadQuery<Post>(
    preparePostQuery(locale),
    { locale, slug },
    { perspective: isDraftMode ? 'previewDrafts' : 'published' }
  );
// export const getPost = (locale: Locale, slug: string) => sanityFetch<Post>({ query: preparePostQuery(locale), params: { locale, slug } });

/* Not used yet */
// export const getAvailableLanguages = () => sanityFetch<LanguagesAvailable>({ query: languagesAvailableQuery });
