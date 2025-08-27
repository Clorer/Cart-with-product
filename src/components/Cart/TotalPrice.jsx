import { useCartStore } from "../../store/useCartStore";

export default function TotalPrice() {
    const {totalPrice} = useCartStore()
  return (
    <>
      <div className="mt-[2rem] flex justify-between items-center">
        <h1>Order Total</h1>
        <h1 className="text-2xl font-bold">${totalPrice().toFixed(2)}</h1>
      </div>
    </>
  );
}
