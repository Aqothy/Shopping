import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <nav className="flex bg-white shadow-sm mb-3 p-3 justify-between sticky">
      <div className="flex gap-3">
        <Link to="/store">Store</Link>
      </div>
      <button onClick={openCart} className="relative">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
          className="h-[2rem]"
        />
        <div className="rounded-full bg-red-500 flex justify-center items-center w-[1.5rem] text-white absolute top-5 right-0 translate-x-[45%]">
          {cartQuantity}
        </div>
      </button>
    </nav>
  );
}
