import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
  imgUrl: string;
  title: string;
  color: string;
  discount: string;
  price: string;
}

interface Store {
  name: string;
  location: string;
}

export interface Products {
  id: string;
  store: Store;
  product: Product;
}

interface ProducState {
  isLoading: boolean;
  products: Products[];
  isError: boolean;
}

const initialState: ProducState = {
  isLoading: false,
  products: [],
  isError: false,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const res = await fetch("http://localhost:3000/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = res.json();

  return json;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productPicked: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { productPicked } = productSlice.actions;
export default productSlice.reducer;
