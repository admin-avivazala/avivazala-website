import { defineType, defineField } from 'sanity';
import { defaultLocale, supportedLanguages } from '@lib/i18n';

const fields = supportedLanguages.map((lang) =>
  defineField({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.isDefault ? undefined : 'blockTranslations'
  })
);

export default defineType({
  title: 'Localized block',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'blockTranslations',
      options: { collapsible: true }
    }
  ],
  fields,

  preview: {
    select: {
      blocks: defaultLocale
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block: { _type: string }) => block._type === 'block'
      );
      return {
        title: block
          ? block.children
              .filter((child: { _type: string }) => child._type === 'span')
              .map((span: { text: any }) => span.text)
              .join('')
          : 'No title'
      };
    }
  }
});
