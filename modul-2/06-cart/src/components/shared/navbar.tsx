import { Bell, Mail, Search, ShoppingCart, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import Divider from "./divider";
import CardDropdown from "../cart/cardDropdown";

const Navbar = () => {
  const { items } = useAppSelector((state) => state.cart);
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <nav className=" w-full bg-white shadow-md flex items-center px-12 py-4 gap-6 z-40 fixed top-0 left-0">
        <Link to="/">
          <img src="/tokopedia.svg" />
        </Link>
        <span className="text-sm">Kategori</span>
        <div className="flex border rounded-md  gap-2 p-2 items-center flex-1">
          <Search className="text-gray-400" />
          <input
            className="border-none focus:ring-0 w-full outline-none"
            placeholder="Cari di Tokopedia"
          />
        </div>
        <div className="flex items-center">
          <span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative grid place-content-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <Link to="/cart">
              <ShoppingCart strokeWidth={1} />
            </Link>

            <div
              className={`absolute border left-1/2 right-1/2 transform -translate-x-1/2 top-[45px] w-[400px] bg-white shadow-md rounde-md scale-y-0 origin-top ${
                isHover && "scale-y-100"
              } transition-all duration-100 p-4`}
            >
              <div className="flex items-center justify-between text-sm">
                <p className="font-bold">Keranjang({items.length})</p>
                <Link className="text-sm font-bold text-pink-500" to="/cart">
                  Lihat Sekarang
                </Link>
              </div>
              <Divider h="h-[2px]" />
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <CardDropdown key={item.products.product.title} item={item} />
                ))}
              </div>
            </div>
          </span>
          <span className="grid place-content-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Bell strokeWidth={1} />
          </span>
          <span className="grid place-content-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Mail strokeWidth={1} />
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2">
            <Smartphone />
            <span>putuhema</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/vite.svg" alt="profile" />
            <span>Putu</span>
          </div>
        </div>
      </nav>
      {isHover && (
        <div className="top-0 left-0 w-full h-full fixed bg-black/20 z-10"></div>
      )}
    </>
  );
};

export default Navbar;
