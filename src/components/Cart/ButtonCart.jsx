export default function ButtonCart({ children, clickFunc }) {
  return (
    <>
      <button className="w-full rounded-3xl bg-amber-700 text-center py-[0.5rem] text-[#f4f0e9] mt-[1rem]" onClick={clickFunc}>
        {children}
      </button>
    </>
  );
}
