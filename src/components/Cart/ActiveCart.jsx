import TotalPrice from "./TotalPrice"
import ButtonCart from "./ButtonCart";
import treeIcon from "/images/icon-carbon-neutral.svg"
import { useModalCartStore } from "../../store/useModalCartStore";

export default function ActiveCart() {
  const {changeVisibleModal} = useModalCartStore()
  return (
    <>
      <TotalPrice />
      <div className="mt-[2rem] rounded-lg bg-[#f4f0e9] w-full h-[3rem] flex items-center justify-center">
        <img className="mr-[0.5rem]" src={treeIcon} alt="Tree icon" />
        <h1>
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </h1>
      </div>
        <ButtonCart clickFunc={changeVisibleModal}>Confirm Order</ButtonCart>
    </>
  );
}
