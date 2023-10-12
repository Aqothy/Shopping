import { StoreItem } from "../Components/StoreItem.tsx";
import { Items } from "../data/items.ts";

export function Store() {
  return (
    <>
      <h1 className="mb-[1rem] text-center">Store</h1>
      <div className="flex gap-[2rem] justify-center items-center">
        {Items.map((item) => {
          return <StoreItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
