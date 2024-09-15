import { defineField, defineType } from 'sanity';
import { GrYoga } from 'react-icons/gr';
import { defaultLocale } from '@lib/i18n';

export default defineType({
  title: 'Event',
  name: 'event',
  type: 'document',
  icon: GrYoga,
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
      name: 'eventType',
      title: 'Event Type',
      type: 'reference',
      to: { type: 'eventType' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'text'
    }),
    defineField({
      name: 'maxSubscribers',
      title: 'Max Subscribers',
      type: 'number',
      validation: (rule) => rule.precision(2)
    }),
    defineField({
      name: 'basicPrice',
      title: 'Basic Price',
      type: 'number'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    }),
    defineField({
      name: 'publicationStartDate',
      title: 'Publication Start Date',
      type: 'datetime'
    }),
    defineField({
      name: 'publicationEndDate',
      title: 'Publication End Date',
      type: 'datetime'
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'If this will be visible in your websiste',
      initialValue: true
    }),
    defineField({
      title: 'Attendants',
      name: 'attendants',
      type: 'array',
      of: [{ type: 'eventAttendant' }]
    })
  ],
  preview: {
    select: {
      title: `title.${defaultLocale}`
    }
  }
});
