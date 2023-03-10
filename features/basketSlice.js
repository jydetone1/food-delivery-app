import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem._id === action.payload._id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload._id}) as its not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsId = (state, id) =>
  state.basket.items.filter((item) => item._id === id);
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.payload.price, 0);

export default basketSlice.reducer;
