import { Link } from "react-router-dom";
import Container from "./components/layout/container";
import ProductCard from "./components/shared/productCard";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { useEffect } from "react";
import { getProducts } from "./redux/slice/productSlice";

function App() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div className="p-2 pt-10">
          <div className="w-full flex items-center justify-between mb-4">
            <h1 className="font-bold text-md">Wujudkan whishlist kamu!</h1>
            <Link className="font-bold text-pink-500 text-md" to="/">
              Lihat Semua
            </Link>
          </div>
          <div className="flex gap-4 w-full overflow-x-auto pb-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
