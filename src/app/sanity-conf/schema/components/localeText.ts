import { defineType, defineField } from 'sanity';
import { supportedLanguages } from '@lib/i18n';

const fields = supportedLanguages.map((lang) =>
  defineField({
    title: lang.title,
    name: lang.id,
    type: 'text',
    fieldset: lang.isDefault ? undefined : 'translations'
  })
);

export default defineType({
  title: 'Localized text',
  name: 'localeText',
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
