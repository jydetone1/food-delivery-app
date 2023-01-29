import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const ResturantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Resturant', { item })}
      className='bg-white mr-3 shadow'
    >
      <Image
        source={{ uri: urlFor(item.image).url() }}
        className='h-24 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{item.name}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='#00CCBB' opacity={0.5} size={22} />

          <Text className='text-xs text-green-500 space-x-1'>
            {item.rating} .
            <Text className='text-xs text-gray-500 '> {item.type.name}</Text>
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby .{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
