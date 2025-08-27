import emptyIcon from "/images/illustration-empty-cart.svg";

export default function EmptyCart() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          className="w-[10rem] h-[10rem]"
          src={emptyIcon}
          alt="Empty icon"
        ></img>
        <h1 className="text-[#ad8355]">Your added items will appear here</h1>
      </div>
    </>
  );
}
