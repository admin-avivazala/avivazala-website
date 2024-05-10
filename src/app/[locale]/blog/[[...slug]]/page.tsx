import { PortableTextBlock } from 'next-sanity';
import { Locale } from '@lib/i18n';
import type { Metadata } from 'next';
import { getTranslations, getLocale } from 'next-intl/server';
import SanityContent from '@components/SanityContent';
import { getPageSlugs, getPostSlugs, getPosts } from '@sanityLib/fetchers';
import { Slug } from 'types/sanity.types';
import Posts from '[locale]/blog/[[...slug]]/Posts';
import { slugPerType } from '@lib/config';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  robots: process.env.ROBOTS,
};

export async function generateStaticParams() {
  const allSlugs = await getPostSlugs();

  const res = allSlugs!.flatMap((slugItem: { slug: { [s: string]: unknown; } | ArrayLike<unknown>; }) => {
    const fieldArray = Object.entries(slugItem.slug);

    const localizedSlugs = fieldArray.filter((item) => item[0] !== '_type');

    const slugTrunk = slugPerType.get('post');

    return localizedSlugs.map((field) => {
      if (field[0] !== '_type') {
        const slug =
          (field[1] as Slug).current === '/' ? '' : (field[1] as Slug).current;

        return {slug: `/${field[0]}/${slugTrunk}/${slug}`};
      }
    });
  });

  return res;
}

export default async function BlogPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const t = await getTranslations('Home');
  const locale = (await getLocale()) as Locale;
  const slug = params?.slug;

  const posts = await getPosts()

  return (slug ?
    <main>
      Blog Page {t('hello')}: {locale} | {params.slug?.join(', ')}
      {/* <SanityContent
        className="mx-auto max-w-2xl"
        value={post.content as PortableTextBlock[]}
      /> */}
    </main>
    : <Posts posts={posts!} curLocale={'hu'} />
  );
}