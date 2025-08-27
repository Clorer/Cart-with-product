import { useCartStore } from "../../store/useCartStore";
import EmptyCart from "./EmptyCart";
import ActiveCart from "./ActiveCart";
import ProductInCart from "./ProductInCart";
export default function DesktopCart() {
  const { cart, counterOnePositionInCart } = useCartStore();

  return (
    <div className="rounded-xl flex flex-col gap-3 py-[2rem] w-[20rem] lg:w-[25rem] bg-white min-h-[20rem] px-[1rem]">
      <h1 className="text-2xl font-bold text-amber-700">
        Your Cart ({cart.length})
      </h1>

      {cart.length === 0 ? <EmptyCart /> :
      <>
        {cart.map((product) => (
          <ProductInCart key={product.id} product={product} />
        ))}
        <ActiveCart />
      </>}

    </div>
  );
}
