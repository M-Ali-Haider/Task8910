import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      { name: "Samsung Galaxy S8", price: 399.99, quantity: 1 },
      { name: "Google Pixel", price: 499.99, quantity: 1 },
      { name: "Xiaomi Redmi Note 2", price: 699.99, quantity: 1 },
      { name: "Samsung Galaxy S7", price: 599.99, quantity: 1 },
    ],
    totalQuantity: 4,
    totalAmount: 2199.96,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((i) => i.name !== item.name);
        } else {
          existingItem.quantity -= 1;
        }
        state.totalAmount -= item.price;
        state.totalQuantity -= 1;
      }
    },
    removeItemCompletely: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        state.items = state.items.filter((i) => i.name !== item.name);
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearCart, addItem, removeItem, removeItemCompletely } =
  cartSlice.actions;

export default cartSlice.reducer;
