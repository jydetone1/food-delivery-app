import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import { XMarkIcon } from 'react-native-heroicons/outline';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50 '>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className=' text-lg text-gray-400'>
                Estimated Delivery Time
              </Text>
              <Text className='text-4xl font-bold'>45-60 minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://links.papareact.com/fls',
              }}
              className='h-20 w-20'
            />
          </View>
          <Progress.Bar size={30} indeterminate={true} color='#00CCBB' />
          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant.name} is on the way
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 z-0 mt-3'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.name}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-12 w-12 rounded-full  p-4 ml-5 bg-gray-300'
        />
        <View className='flex-1'>
          <Text className='text-lg'> Tyrese</Text>
          <Text className='text-lg text-gray-400'>Your driver</Text>
        </View>
        <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
