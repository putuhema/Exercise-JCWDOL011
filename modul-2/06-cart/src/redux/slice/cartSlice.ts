import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface Cart {
  items: {
    products: Products;
    quantity: number;
  }[];
  totalPrice: number;
  totalDiscount: number;
  endTotal: number;
}

const initialState: Cart = {
  items: [],
  totalPrice: 0,
  totalDiscount: 0,
  endTotal: 0,
};

const calculatePrice = (state: Cart) => {
  const calculateTotalPrice = () =>
    state.items.reduce(
      (acc, curr) => acc + Number(curr.products.product.price) * curr.quantity,
      0
    );
  const calculateDiscount = () =>
    state.items
      .map(
        (item) =>
          Math.floor(
            (+item.products.product.discount / 100) *
              +item.products.product.price
          ) * item.quantity
      )
      .reduce((acc, curr) => acc + curr, 0);

  state.totalPrice = calculateTotalPrice();
  state.totalDiscount = calculateDiscount();
  state.endTotal = calculateTotalPrice() - calculateDiscount();
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductCart: (state, action) => {
      state.items.push({
        products: action.payload,
        quantity: 1,
      });
      calculatePrice(state);
    },
    incrementQty: (state, action) => {
      state.items.map((state) =>
        state.products.id === action.payload
          ? { ...state, quantity: (state.quantity += 1) }
          : state
      );
      calculatePrice(state);
    },
    decrementQty: (state, action) => {
      state.items.map((state) =>
        state.products.id === action.payload
          ? { ...state, quantity: (state.quantity -= 1) }
          : state
      );
      calculatePrice(state);
    },
    deleteCart: (state, action) => {
      state.items = state.items.filter(
        (state) => state.products.id !== action.payload
      );
      calculatePrice(state);
    },
    changeQty: (state, action) => {
      state.items.map((state) =>
        state.products.id === action.payload.id
          ? { ...state, quantity: action.payload.qty }
          : state
      );
      calculatePrice(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.endTotal = 0;
      state.totalDiscount = 0;
      state.endTotal = 0;
    },
  },
});

export const {
  addProductCart,
  incrementQty,
  decrementQty,
  changeQty,
  deleteCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
