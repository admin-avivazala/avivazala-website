import { defineType, defineField } from 'sanity';
import { supportedLanguages } from '@lib/i18n';

const fields = supportedLanguages.map((lang) =>
  defineField({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations',
    validation: (rule) =>
      lang.isDefault ? rule.required() : rule.custom(() => true)
  })
);

export default defineType({
  title: 'Localized string',
  name: 'localeString',
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
