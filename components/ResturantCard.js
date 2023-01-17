import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline';

const ResturantCard = (props) => {
  const {
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
  } = props;
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image source={{ uri: imgUrl }} className='h-64 w-64 rounded-sm' />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='#00CCBB' opacity={0.5} size={22} />

          <Text className='text-xs text-green-500 space-x-1'>
            {rating} .<Text className='text-xs text-gray-500 '>{genre}</Text>
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby .{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
