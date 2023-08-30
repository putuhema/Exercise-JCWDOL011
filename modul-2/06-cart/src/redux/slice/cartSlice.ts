import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface Cart {
  items: {
    products: Products;
    quantity: number;
    isChecked: boolean;
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
      (acc, curr) =>
        acc +
        (curr.isChecked
          ? Number(curr.products.product.price) * curr.quantity
          : 0),
      0
    );
  const calculateDiscount = () =>
    state.items
      .map((item) =>
        item.isChecked
          ? Math.floor(
              (+item.products.product.discount / 100) *
                +item.products.product.price
            ) * item.quantity
          : 0
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
        isChecked: true,
      });

      calculatePrice(state);
    },
    incrementQty: (state, action) => {
      state.items.map((item) =>
        item.products.id === action.payload
          ? { ...item, quantity: (item.quantity += 1) }
          : item
      );
      calculatePrice(state);
    },
    decrementQty: (state, action) => {
      state.items.map((item) =>
        item.products.id === action.payload.id
          ? {
              ...item,
              quantity: (item.quantity -= 1),
            }
          : item
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
      state.items = state.items.map((item) =>
        item.products.id === action.payload.id
          ? { ...item, quantity: action.payload.qty }
          : item
      );
      calculatePrice(state);
    },
    controlCheckedCart: (state, action) => {
      state.items = state.items.map((item) =>
        item.products.id === action.payload
          ? { ...item, isChecked: !item.isChecked }
          : item
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
  controlCheckedCart,
  deleteCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
