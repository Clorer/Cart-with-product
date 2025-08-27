import CompliteIcon from "/images/icon-order-confirmed.svg";
import { useCartStore } from "../store/useCartStore";
import { useModalCartStore } from "../store/useModalCartStore";
import TotalPrice from "./Cart/TotalPrice";
import ProductInCart from "./Cart/ProductInCart";
import ButtonCart from "./Cart/ButtonCart";

export default function ConfirmOrder() {
  const { cart, removeAllFromCart } = useCartStore();
  const { changeVisibleModal } = useModalCartStore();

  const handleClick = () => {
    changeVisibleModal();
    setTimeout(() => {
      removeAllFromCart();
    }, 200);
  };
  return (
    <>
      <div className="w-full h-full bg-black/60 fixed z-50 inset-0 flex items-center justify-center">
        <div className="rounded-lg bg-white min-h-[50vh] w-[80vw] sm:w-[60vw] lg-[45vw] xl:w-[30vw] p-[2rem]">
          <img src={CompliteIcon} alt="Complete Icon" className="m-auto" />
          <h1 className="text-3xl font-bold mt-[2rem]">Order Confirmed</h1>
          <h1 className="opacity-50">We hope you enjoy your food!</h1>
          <div className="my-[1rem] rounded-lg bg-[#f4f0e9] p-[1rem]">
            {cart?.map((product) => (
              <ProductInCart key={product.id} product={product} />
            ))}
            <TotalPrice />
          </div>
          <ButtonCart clickFunc={handleClick}>Start new order</ButtonCart>
        </div>
      </div>
    </>
  );
}
