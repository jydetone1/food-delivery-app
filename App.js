import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import LoadingScreen from './screens/LoadingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { Provider } from 'react-redux';
import { store } from './store';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Resturant' component={ResturantScreen} />
          <Stack.Screen
            name='Basket'
            component={BasketScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name='Loading'
            component={LoadingScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='Delivery'
            component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
