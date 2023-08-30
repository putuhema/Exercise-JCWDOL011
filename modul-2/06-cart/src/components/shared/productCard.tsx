import { Store, Trash } from "lucide-react";
import { useAppDispatch } from "../../hooks/useRedux";
import { addProductCart } from "../../redux/slice/cartSlice";
import { Products } from "../../type";
import { productPicked } from "../../redux/slice/productSlice";

type Props = {
  product: Products;
};
const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-md shadow-md p-2 basis-[300px] shrink-0 flex flex-col gap-2 w-[250px] overflow-hidden">
      <div className="flex gap-2 items-center">
        <img
          className="w-20 rounded-md h-20 object-cover"
          src={product.product.imgUrl}
        />
        <div className="p-2">
          <p className="text-gray-500 text-ellipsis whitespace-nowrap  w-[200px] overflow-hidden">
            {product.product.title}
          </p>
          <p className="font-bold">
            Rp{Number(product.product.price).toLocaleString("ID")}
          </p>
          <span className="flex gap-2 items-center text-xs">
            <Store size={15} strokeWidth={1} />
            <p className=" uppercase text-gray-500 leading-3">
              {product.store.name}
            </p>
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button>
          <Trash strokeWidth={1} />
        </button>
        <button
          onClick={() => {
            dispatch(addProductCart(product));
            dispatch(productPicked(product.id));
          }}
          className="flex-1 flex gap-2 items-center text-center border rounded-md p-2 justify-center border-pink-500 text-pink-500"
        >
          <span>+Keranjang</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
