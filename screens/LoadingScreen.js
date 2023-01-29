import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animation from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animation.Text
        animation='slideInUp'
        className='text-lg my-10 text-centerfont-bold text-white'
        iterationCount={1}
      >
        Waiting for resturant to accept your order
      </Animation.Text>
      <Progress.Circle size={50} indeterminate={true} color='#fff' />
    </SafeAreaView>
  );
};
export default LoadingScreen;
