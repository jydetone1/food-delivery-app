export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of Dish',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price of Dish',
      type: 'number',
    },
    {
      name: 'short_description',
      title: 'Description of Dish',
      type: 'string',
      validaton: (Rule) => Rule.max(200),
    },
  ],
}
