import { useCartStore } from "../../store/useCartStore"

export default function ProductInCart({ product }){
return(
<div className="border-b-[#a0866d4a] border-b-1 w-full h-[4rem]">
    <h1 className="font-semibold">{product.name}</h1>
    <div className="flex gap-2">
        <h1 className="text-amber-700 font-semibold">{product.count}x</h1>
        <h1 className="opacity-50">${product.price.toFixed(2)}</h1>
        <h1 className="font-semibold opacity-65">${(product.price * product.count).toFixed(2)}</h1>
    </div>
</div>
)}