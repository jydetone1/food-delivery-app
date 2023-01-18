export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'image of Category',
      type: 'image',
    },
  ],
}
