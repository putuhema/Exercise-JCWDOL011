import { Minus, Plus, Trash } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef, useState } from "react";
import Divider from "../shared/divider";
import { Products } from "../../type";
import { useAppDispatch } from "../../hooks/useRedux";
import {
  changeQty,
  controlCheckedCart,
  decrementQty,
  deleteCart,
  incrementQty,
} from "../../redux/slice/cartSlice";

type Props = {
  item: {
    products: Products;
    quantity: number;
    isChecked: boolean;
  };
};

const Card = ({ item }: Props) => {
  const { products } = item;
  const quantity = item.quantity;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState("");

  const calculateDiscount = Math.floor(
    +products.product.price -
      (+products.product.discount / 100) * +products.product.price
  ).toLocaleString("ID");

  useClickOutside<HTMLSpanElement>(ref, () => {
    setShowNote(false);
  });

  const handleTakingNote = (e: React.FormEvent<HTMLSpanElement>) => {
    if (e.currentTarget.textContent) {
      setNote(e.currentTarget.textContent);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-start">
        <input
          className="w-5 h-5 bg-white rounded-md text-pink-500 ring-0 focus:ring-0"
          type="checkbox"
          name="store"
          id="store"
          onChange={() => dispatch(controlCheckedCart(item.products.id))}
          checked={item.isChecked}
        />
        <span className="flex flex-col gap-2">
          <h3 className="uppercase m-0 font-bold text-xl leading-4">
            {products.store.name}
          </h3>
          <span className="text-xs text-gray-500">Dilayani Tokopedia</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="w-5 h-5 bg-white rounded-md text-pink-500 ring-0 focus:ring-0"
          type="checkbox"
          name="store-item"
          id="store-item"
          onChange={() => dispatch(controlCheckedCart(item.products.id))}
          checked={item.isChecked}
        />
        <div className="flex gap-2">
          <img
            className="w-16 h-16 object-cover"
            src={products.product.imgUrl}
            alt="kawai neko"
          />
          <div>
            <p>{products.product.title}</p>
            <p className="text-sm text-gray-500 mb-2">
              {products.product.color}
            </p>
            <span className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-pink-500 rounded-sm text-white">
                {products.product.discount}%
              </span>
              <p className="text-gray-500 line-through text-sm">
                Rp.{Number(products.product.price).toLocaleString("ID")}
              </p>
              <p className="font-bold">Rp.{calculateDiscount}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {!showNote ? (
            <button
              onClick={() => setShowNote(true)}
              className="text-sm text-pink-500"
            >
              Tulis catatan
            </button>
          ) : (
            <div className="flex flex-col">
              <fieldset className="border border-pink-500 w-[200px] rounded-md p-2">
                <legend className="text-xs text-gray-500 ml-3">
                  Tulis catatan untuk barang...
                </legend>
                {/* TODO:stop users from typing if note.length >= 144 */}
                <span
                  defaultValue={note}
                  onInput={(e) => handleTakingNote(e)}
                  ref={ref}
                  className="block w-[200px] whitespace-break-spaces border-none focus:ring-0 focus:outline-none overflow-hidden resize-y min-h-[40px] leading-4"
                  role="textbox"
                  contentEditable
                ></span>
              </fieldset>
              <span className="self-end text-sm text-gray-500">
                {note.length}/144
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-4 items-center">
          <span className="mr-10 cursor-pointer">
            <Trash
              onClick={() => dispatch(deleteCart(item.products.id))}
              strokeWidth={1}
            />
          </span>
          <span className="flex gap-2 items-center justify-between">
            <span
              onClick={() =>
                quantity > 0 &&
                dispatch(
                  decrementQty({ id: item.products.id, qty: item.quantity })
                )
              }
              className={`cursor-pointer rounded-full p-1 border-2 ${
                quantity === 0 ? "border-gray-300" : "border-pink-500"
              } `}
            >
              <Minus
                className={`
                ${quantity === 0 ? "text-gray-300" : "text-pink-500"}
              `}
                size={13}
              />
            </span>
            <input
              className="cursor-pointer text-center border-none w-10 focus:ring-0 p-2 text-gray-500"
              type="text"
              value={quantity}
              onChange={(e) =>
                dispatch(
                  changeQty({ id: item.products.id, qty: +e.target.value })
                )
              }
            />
            <span
              onClick={() =>
                quantity < 13 && dispatch(incrementQty(item.products.id))
              }
              className="cursor-pointer rounded-full p-1 border-2 border-pink-500"
            >
              <Plus className="text-pink-500" size={13} />
            </span>
          </span>
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default Card;
