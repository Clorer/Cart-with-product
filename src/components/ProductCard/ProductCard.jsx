import { useCartStore } from "../../store/useCartStore";
import AddToCartBtn from "./AddToCartBtn";
import ChangeCountBtn from "./ChangeCountBtn";

export default function ProductCard({ DATA }){
    const {findInCart} = useCartStore();
return(
    <div className="relative max-w-[20rem] lg:max-w-[15rem] h-[25rem] lg:max-h-[20rem] m-auto">
        <img src={DATA.image.desktop} alt={DATA.name} className="w-[20rem] h-[19rem] lg:w-[15rem] lg:h-[14rem] rounded-lg" />
        {findInCart(DATA) ? <ChangeCountBtn product={DATA} /> : <AddToCartBtn product={DATA}/>}
        <div className="mt-[2rem]">
            <h1 className="text-xs opacity-50">{DATA.category}</h1>
            <h1 className="font-semibold">{DATA.name}</h1>
            <h1 className="font-semibold text-amber-700">{"$" + DATA.price.toFixed(2)}</h1>
        </div>
    </div>
)}