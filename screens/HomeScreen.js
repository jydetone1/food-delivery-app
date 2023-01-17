import React, { useLayoutEffect } from 'react';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { useNavigation } = require('@react-navigation/native');
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row  pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs '>Deliver now</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>
      <View className='flex-row items-center space-x-2 mx-4 mb-3 '>
        <View className='flex-row  flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput placeholder='Search' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <Featured
          id=' 1'
          title='Featured'
          description='Discover the best restaurants, cafés, bars and more'
          FeaturedCategory='Featured'
        />

        <Featured
          id=' 2'
          title='Featured'
          description='Discover the best restaurants, cafés, bars and more'
          FeaturedCategory='Featured'
        />

        <Featured
          id=' 3'
          title='Featured'
          description='Discover the best restaurants, cafés, bars and more'
          FeaturedCategory='Featured'
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
