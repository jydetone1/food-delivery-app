export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant Name',
      type: 'string',
      validaton: (Rule) => Rule.required(),
    },

    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },

    {
      name: 'lat',
      title: 'Latitude of the resturant',
      type: 'number',
    },

    {
      name: 'long',
      title: 'Longitude of the resturant',
      type: 'number',
    },

    {
      name: 'address',
      title: 'Address of the resturant',
      type: 'string',
      validaton: (Rule) => Rule.required(),
    },

    {
      name: 'rating',
      title: 'Rating of the resturant',
      type: 'number',
      validaton: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    },

    {
      name: 'type',
      title: 'Category',
      validaton: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },

    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
