'use client';

import { QueryResponseInitial, useQuery } from '@sanity/react-loader';

import PostsPostComponent from './Posts.component';
import { Post } from 'types/sanity.types';
import { preparePostsQuery } from 'sanity-conf/lib/queries';
import { Locale } from '@lib/i18n';

export type PostsPreviewProps = {
  locale: Locale;
  postsInitial: QueryResponseInitial<Post[]>;
};

export default function PostsPreview({
  locale,
  postsInitial
}: PostsPreviewProps) {
  const { data } = useQuery<Post[]>(
    preparePostsQuery(locale),
    { locale },
    {
      initial: postsInitial
    }
  );

  return data ? (
    <PostsPostComponent locale={locale} posts={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
