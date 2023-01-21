import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItems } from '../features/basketSlice';

const Dish = ({ dish }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const addItemsToCart = () => {
    dispatch(addToBasket({ payload: dish }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={` bg-white border  p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{dish.name}</Text>
            <Text className='text-gray-400'>{dish.short_description}</Text>
            <Text className='text-gray-400 mt-2'>
              <Currency quantity={dish.price} currency='USD' />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{ uri: urlFor(dish.image).url() }}
              className='h-20 w-20 p-4 bg-gray-300 rounded-sm'
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed ? (
        <View className='bg-white px-4'>
          <View className=' flex-row items-center space-x-2'>
            <TouchableOpacity>
              <MinusCircleIcon
                color={items > 0 ? '#00CCBB' : 'gray'}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemsToCart}>
              <PlusCircleIcon color='#00CCBB' size={40} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Dish;
