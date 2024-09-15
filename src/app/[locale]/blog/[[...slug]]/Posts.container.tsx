import { Locale } from '@lib/i18n';
import { loadPosts } from 'sanity-conf/lib/fetchers';
import Posts from './Posts.component';
import PostsPreview from './Posts.preview';

export type PostsContainerProps = {
  locale: Locale;
  isDraftMode: boolean;
};

export default async function PostsContainer({
  locale,
  isDraftMode = false
}: PostsContainerProps) {
  const postsInitial = await loadPosts(locale, isDraftMode);

  return isDraftMode ? (
    <PostsPreview locale={locale} postsInitial={postsInitial} />
  ) : (
    <Posts locale={locale} posts={postsInitial.data} />
  );
}
