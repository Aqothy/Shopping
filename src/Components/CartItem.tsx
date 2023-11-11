import { useShoppingCart } from "../context/ShoppingCartContext";
import { Items } from "../data/items";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = Items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center">
        <img src={item.imgUrl} className="h-[75px]" />
        <div className="ml-[0.5rem]">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-[0.65rem] text-gray-400">x{quantity}</span>
            )}
          </div>
          <div className="text-[0.75rem] text-gray-400">{item.price}</div>
        </div>
      </div>
      <div className="flex">
        <div>${item.price * quantity}</div>
        <button
          onClick={() => {
            removeFromCart(item.id);
          }}
          className="bg-red-500 px-2 rounded-xl ml-[0.5rem]"
        >
          x
        </button>
      </div>
    </div>
  );
}
