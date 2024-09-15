import { defineField, defineType } from 'sanity';
import { GrContact } from 'react-icons/gr';

export default defineType({
  title: 'Contact Form',
  name: 'contactForm',
  type: 'document',
  icon: GrContact,
  fields: [
    defineField({
      name: 'fromName',
      title: 'Sender',
      type: 'string'
    }),
    defineField({
      name: 'fromEmail',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email()
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text'
    })
  ],
  preview: {
    select: {
      title: 'fromName'
    }
  }
});
