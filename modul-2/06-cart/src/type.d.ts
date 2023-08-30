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
