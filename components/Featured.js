import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';
const Featured = ({ title, description, id }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center, justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-gray-500 text-xs px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <ResturantCard
          id='1'
          imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
          title='testing'
          rating={4.5}
          genre='Japanese'
          address='1234 test'
          shortDescription='testing'
          dishes={[]}
          long={30}
          lat={30}
        />

        <ResturantCard
          id='1'
          imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
          title='testing'
          rating={4.5}
          genre='Japanese'
          address='1234 test'
          shortDescription='testing'
          dishes={[]}
          long={30}
          lat={30}
        />

        <ResturantCard
          id='1'
          imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
          title='testing'
          rating={4.5}
          genre='Japanese'
          address='1234 test'
          shortDescription='testing'
          dishes={[]}
          long={30}
          lat={30}
        />

        <ResturantCard
          id='1'
          imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
          title='testing'
          rating={4.5}
          genre='Japanese'
          address='1234 test'
          shortDescription='testing'
          dishes={[]}
          long={30}
          lat={30}
        />

        <ResturantCard
          id='1'
          imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
          title='testing'
          rating={4.5}
          genre='Japanese'
          address='1234 test'
          shortDescription='testing'
          dishes={[]}
          long={30}
          lat={30}
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
