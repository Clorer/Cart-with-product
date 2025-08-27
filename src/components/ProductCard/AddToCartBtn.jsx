import CartIcon from "/images/icon-add-to-cart.svg";
import { useCartStore } from "../../store/useCartStore";
export default function AddToCartBtn({ product }) {
    const { addToCart } = useCartStore()
  return (
    <>
      <button className="flex items-center gap-1 min-w-[9rem] rounded-3xl bg-white border border-yellow-800 py-[0.5rem] px-[1rem] absolute left-1/2 -translate-x-1/2 -translate-y-6"
      onClick={() => addToCart(product)}
      >
        <img src={CartIcon} alt="Cart icon" />
        Add to Cart
      </button>
    </>
  );
}
