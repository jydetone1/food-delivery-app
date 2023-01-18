export default {
  name: 'featured',
  type: 'document',
  title: 'Featured  menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resturants',
      type: 'array',
      title: 'Resturants',
      of: [{type: 'reference', to: [{type: 'resturant'}]}],
    },
  ],
}
