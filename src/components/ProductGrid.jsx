import { DATA } from "../assets/product.data";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid lg:col-span-2">
      <h1 className="font-bold text-3xl ">Desserts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center h-full mt-[1rem]">
        {DATA.map((item, idx) => (
          <ProductCard key={idx} DATA={item} />
        ))}
      </div>
    </div>
  );
}
