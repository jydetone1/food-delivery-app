import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import Dish from '../components/DIsh';
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';

const ResturantScreen = () => {
  const navigation = useNavigation();
  const {
    params: { item },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View className='relative'>
        <Image
          source={{ uri: urlFor(item.image).url() }}
          className='h-56 w-full bg-gray-500 rounded-sm p-4'
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className='absolute top-14 left-5 p-2  rounded-full bg-white shadow'
        >
          <ArrowLeftIcon color='#00CCBB' size={30} />
        </TouchableOpacity>
      </View>

      <View className='bg-white'>
        <View className='px-4 pt-4'>
          <Text className='font-bold text-3xl'>{item.name}</Text>
          <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
              <StarIcon color='#00CCBB' opacity={0.5} size={22} />
              <Text className='text-xs text-green-500 space-x-1'>
                {item.rating} .
                <Text className='text-xs text-gray-500 '>{item.type.name}</Text>
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <MapPinIcon color='gray' opacity={0.4} size={22} />
              <Text className='text-xs text-gray-500'>
                Nearby .{item.address}
              </Text>
            </View>
          </View>
          <Text className='text-xs text-gray-500 pb-4'>
            {item.short_description}
          </Text>
        </View>
        <TouchableOpacity className=' flex-row items-center space-x-2 p-4 border-y border-gray-300'>
          <QuestionMarkCircleIcon color='gray' size={22} />
          <Text className='pl-2 text-md flex-1 font-bold'>
            Have a food allergy
          </Text>
          <ChevronRightIcon color='#00CCBB' size={22} />
        </TouchableOpacity>
      </View>

      <View>
        <Text className='text-xl font-bold px-4 pt-6 mb-3'>Menu</Text>
        {item.dishes.map((dish) => (
          <Dish key={dish._id} dish={dish} />
        ))}
      </View>
    </ScrollView>
  );
};
export default ResturantScreen;
