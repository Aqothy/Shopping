import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

interface ShoppingCartProps {
  isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    isOpen && (
      <div className="relative h-screen">
        <div
          className={`fixed top-0 right-0 h-full w-0 transition-transform transform ${
            isOpen ? "w-1/3 translate-x-0" : "translate-x-full"
          } bg-white border border-gray-300 p-4 rounded shadow-lg`}
        >
          <button
            onClick={closeCart}
            className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer absolute top-4 right-4"
          >
            X
          </button>
          <div className="top-[3rem] absolute flex flex-col gap-3 w-[95%]">
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    )
  );
}
