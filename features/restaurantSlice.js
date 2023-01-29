import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    name: null,
    address: null,
    image: null,
    dishes: [],
    short_description: null,
    rating: null,
    price: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer;
