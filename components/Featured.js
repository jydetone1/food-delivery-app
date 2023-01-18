import React, { useEffect, useState } from 'react';
import sanityClient from '../sanity';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

const Featured = ({ item }) => {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id]{
          ...,
          resturants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        { id: item._id }
      )
      .then((data) => {
        setResturants(data?.resturants);
      });
  }, []);

  console.log('res', resturants);
  return (
    <View>
      <View className='mt-4 flex-row items-center, justify-between px-4'>
        <Text className='font-bold text-lg'>{item.name}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-gray-500 text-xs px-4'>
        {item.short_description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {resturants?.map((resturant) => (
          <ResturantCard key={resturant._id} item={resturant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
