import { defineField, defineType } from 'sanity';
import { defaultLocale } from '@lib/i18n';
import { GrDocument } from 'react-icons/gr';

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: GrDocument,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'localeBlockContent' }]
    }),
    defineField({
      title: 'List other documents',
      name: 'listOf',
      description: `Choose on of the following document type`,
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Post list', value: 'post' },
              { title: 'Post categories', value: 'postCategory' }
            ]
          }
        }
      ],
      validation: (rule) => rule.max(1)
    })
  ],

  preview: {
    select: {
      title: `title.${defaultLocale}`,
      media: 'mainImage'
    }
  }
});
