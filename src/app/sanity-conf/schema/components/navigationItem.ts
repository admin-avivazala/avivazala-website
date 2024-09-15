import { defineField, defineType } from 'sanity';
import { GrNavigate } from 'react-icons/gr';
import { defaultLocale } from '@lib/i18n';

export default defineType({
  title: 'Navigation Item',
  name: 'navigationItem',
  type: 'object',
  icon: GrNavigate,
  fields: [
    defineField({
      title: 'Navigation Text',
      name: 'title',
      type: 'localeString'
    }),
    defineField({
      title: 'Navigation Item URL',
      name: 'navigationItemLink',
      type: 'navigationLink'
    })
  ],
  preview: {
    select: {
      title: `title.${defaultLocale}`
    }
  }
});
