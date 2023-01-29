import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItem, setGroupedItem] = useState({});

  useEffect(() => {
    const groupedItems = items.reduce((prev, curr) => {
      if (!prev[curr.id]) {
        prev[curr.id] = [];
      }
      prev[curr.id].push(curr);
      return prev;
    }, {});
    setGroupedItem(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'> Cart</Text>
            <Text className='text-center text-gray-400'>{restaurant.name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute rounded-full top-3 right-5 rounder-full bg-gray-100 '
          >
            <XCircleIcon color='#00CCBB' height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center, space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-7 w-7 ng-gray-300 rounded-full p-4'
          />
          <Text className='flex-1'> Deliver in 50-57 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB] font-bold'> change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItem).map(([key, items]) => (
            <View
              key={key}
              className=' flex-row items-center space-x-3 bg-white py-2 px-5'
            >
              <Text className=' text-[#00CCBB]'>{items.length} X</Text>
              <Image
                source={{ uri: urlFor(items[0]?.payload.image).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.payload.name}</Text>

              <Text className='text-gray-600'>
                <Currency quantity={items[0]?.payload.price} currency='USD' />
              </Text>

              <TouchableOpacity>
                <Text
                  className='text-[#00CCBB] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={basketTotal} currency='USD' />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              <Currency quantity={basketTotal} currency='USD' />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>
              <Currency quantity={basketTotal + 5.99} currency='USD' />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Loading')}
            className='bg-[#00CCBB] p-4 rounded-lg'
          >
            <Text className='text-center text-white text-lg font-bold'>
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
