import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Link',
  name: 'navigationLink',
  type: 'object',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
      options: {
        disableNew: true
      }
    }),
    defineField({
      title: 'External URL',
      name: 'externalUrl',
      description: 'Use fully qualified URLS for external link',
      type: 'url'
    }),
    defineField({
      name: 'submenu',
      title: 'Sub menu',
      description: 'Define the child menu items of this menu item',
      type: 'array',
      of: [{ type: 'navigationItem' }]
    })
  ]
});
