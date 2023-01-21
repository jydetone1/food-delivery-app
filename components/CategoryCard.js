import { View, Text, Image, TouchableOpacity } from 'react-native';
import { urlFor } from '../sanity';

const CategoryCard = ({ category }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: urlFor(category.image).width(200).url(),
        }}
        className='h-20 w-20 rounded'
      />

      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
