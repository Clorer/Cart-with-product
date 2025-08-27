import MinusImg from "/images/icon-decrement-quantity.svg";
import PlusImg from "/images/icon-increment-quantity.svg";
import { useCartStore } from "../../store/useCartStore";

export default function ChangeCountBtn({ product }) {
  const { counter, addToCart, removeFromCart } = useCartStore();
  
  return (
    <>
      <button className="flex gap-1 min-w-[9rem] rounded-3xl bg-amber-700 border py-[0.5rem] px-[1rem] absolute left-1/2 -translate-x-1/2 -translate-y-6">
        <div className="flex items-center justify-between w-full">
          <img
            src={MinusImg}
            alt="Minus icon"
            className="w-[1.5rem] h-[1.5rem] p-1 rounded-full border border-white hover:bg-[#ddb080]"
            onClick={() => {
              removeFromCart(product);
            }}
          />
          <h1 className="text-white">{counter(product)}</h1>
          <img
            src={PlusImg}
            alt="Plus icon"
            className="w-[1.5rem] h-[1.5rem] p-1 rounded-full border border-white hover:bg-[#ddb080]"
            onClick={() => {
              addToCart(product);
            }}
          />
        </div>
      </button>
    </>
  );
}
