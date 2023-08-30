import { Products } from "../../type";

type Props = {
  item: {
    products: Products;
    quantity: number;
  };
};

const CardDropdown = ({ item }: Props) => {
  const { product } = item.products;
  return (
    <div className="flex gap-2 items-center justify-between ">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-sm object-cover"
          src={product.imgUrl}
          alt={product.title}
        />
        <p>{product.title}</p>
      </div>
      <p className="font-bold text-pink-600">
        Rp.{Number(product.price).toLocaleString("ID")}
      </p>
    </div>
  );
};

export default CardDropdown;
