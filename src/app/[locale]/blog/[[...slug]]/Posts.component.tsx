import { slugPerType } from '@lib/website.config';
import { Link, Locale } from '@lib/i18n';
import { Post } from 'types/sanity.types';

export default function Posts({
  posts,
  locale
}: {
  posts: Post[];
  locale: Locale;
}) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      Posts:
      {posts?.length > 0 ? (
        posts.map((post) => {
          let slugTrunk = slugPerType.get(post!._type!);
          slugTrunk = slugTrunk ? `${slugTrunk}/` : '';

          return post.slug && post.title ? (
            <Link
              key={post._id}
              href={`./${slugTrunk}${post.slug[locale]!.current}`}>
              <h2 className="p-4 hover:bg-blue-50">{post.title[locale]}</h2>
            </Link>
          ) : (
            <></>
          );
        })
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}
