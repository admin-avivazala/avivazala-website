import { defineType, defineField } from 'sanity';
import { supportedLanguages } from '@lib/i18n';

const fields = supportedLanguages.map((lang) =>
  defineField({
    title: lang.title,
    name: lang.id,
    type: 'slug',
    options: {
      source: `title[${lang.id}]`,
      maxLength: 96,
      isUnique: (value, context) => context.defaultIsUnique(value, context)
    },
    validation: (rule) => rule.required(),
    fieldset: lang.isDefault ? undefined : 'translations'
  })
);

export default defineType({
  title: 'Localized slug',
  name: 'localeSlug',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields
});
