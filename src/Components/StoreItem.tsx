import { useShoppingCart } from "../context/ShoppingCartContext";

interface StoreItemProps {
  name: string;
  id: number;
  price: number;
  imgUrl: string;
}

export function StoreItem({ id, name, imgUrl, price }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);
  return (
    <>
      <div className="border border-solid shadow-xl rounded-md w-[250px]">
        <img src={imgUrl} alt={name} className="h-[250px] m-auto" />
        <div className="flex flex-col">
          <div className="flex justify-between w-full items-baseline mb-4 px-2">
            <span>{name}</span>
            <span>${price}</span>
          </div>
          <div className="mt-auto w-full">
            {quantity === 0 ? (
              <button
                onClick={() => increaseCartQuantity(id)}
                className="w-full border border-solid rounded-lg bg-blue-500 text-white"
              >
                + Add to cart
              </button>
            ) : (
              <div className="flex items-center flex-col gap-[0.5rem]">
                <div className="flex items-center justify-center gap-[0.5rem]">
                  <button
                    onClick={() => decreaseCartQuantity(id)}
                    className="border border-solid rounded-lg bg-blue-500 text-white w-[1.5rem]"
                  >
                    -
                  </button>
                  <div className="">
                    <span>{quantity}</span> in cart
                  </div>
                  <button
                    onClick={() => increaseCartQuantity(id)}
                    className="border border-solid rounded-lg bg-blue-500 text-white w-[1.5rem]"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(id)}
                  className="bg-red-500 px-2 rounded-lg mb-2"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
