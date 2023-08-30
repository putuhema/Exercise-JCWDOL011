import { useState } from "react";
import Container from "../components/layout/container";
import Card from "../components/cart/card";
import { ChevronRight, Ticket } from "lucide-react";
import Divider from "../components/shared/divider";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { clearCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const { items, endTotal, totalDiscount, totalPrice } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();
  const qty = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const [isCheck, setIsCheck] = useState(false);

  const handleSubmitCart = async () => {
    if (endTotal > 0) {
      const res = await fetch(" http://localhost:3000/cart", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          id: Math.random(),
          items,
          totalDiscount,
          totalPrice,
          endTotal,
        }),
      });
      if (res.status === 201) {
        dispatch(clearCart());
      }
    }
  };
  return (
    <Container>
      <div className="flex">
        <div className="w-[calc((100%_-_350px)_-_45px)]  shadow-md rounded-md mr-[45px] p-4 mt-8">
          <h2 className="font-bold text-xl mb-4">Keranjang</h2>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsCheck(!isCheck)}
              className="flex items-center gap-4 text-gray-500 text-sm"
            >
              <input
                checked={isCheck}
                onChange={() => setIsCheck(!isCheck)}
                type="checkbox"
                name="choice"
                id="choice"
                className="w-5 h-5 bg-white rounded-md text-pink-500 ring-0 focus:ring-0"
              />
              Pilih Semua
            </button>
            <button>Hapus</button>
          </div>
          <Divider m="my-4" />
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Card key={item.products.product.title} item={item} />
            ))}
          </div>
        </div>
        <div className="w-[350px] shrink-0">
          <div className="fixed top-[140px] w-[1905px] right-auto max-w-[350px] rounded-md shadow-md">
            <div className="p-4">
              <button className="w-full flex items-center justify-between text-gray-500 p-2 border rounded-md">
                <span className="font-bold text-sm flex gap-2 items-center py-2">
                  <Ticket size={20} />
                  <p>Makin Hemat Pakai Promo</p>
                </span>
                <ChevronRight size={20} />
              </button>
            </div>
            <Divider />
            <div className="p-4 flex flex-col gap-4">
              <h4>Ringkasan Belanja</h4>
              <span className="flex justify-between items-center text-gray-400 text-sm">
                <p>Total Harga ({qty} barang)</p>
                <p>Rp{totalPrice.toLocaleString("id")}</p>
              </span>
              <span className="flex justify-between items-center text-gray-400 text-sm">
                <p>Total Diskon barang</p>
                <p>Rp{totalDiscount.toLocaleString("id")}</p>
              </span>
              <Divider h="h-[2px]" />
              <span className="flex justify-between items-center">
                <p>Total Harga</p>
                <p>
                  Rp
                  {endTotal.toLocaleString("id")}
                </p>
              </span>
              <button
                onClick={handleSubmitCart}
                className={`w-full p-4 rounded-md ${
                  qty > 0
                    ? "bg-pink-500 text-white"
                    : "bg-slate-200 text-slate-400"
                } font-bold`}
              >
                Beli({qty})
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
