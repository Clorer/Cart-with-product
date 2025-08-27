import ProductGrid from "./components/ProductGrid";
import DesktopCart from "./components/Cart/DesktopCart";
import ConfirmOrder from "./components/ConfirmOrder";
import { useModalCartStore } from "./store/useModalCartStore";

function App() {
  const {ModalVisible} = useModalCartStore()
  return (
    <div className="px-[8rem] pt-[4rem] flex justify-center">
      <div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-3 items-start">
        <ProductGrid />
        <DesktopCart />
      </div>
        <div className={`mt-6 ${ModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-200`}>
          <ConfirmOrder />
        </div>
    </div>
  );
}

export default App;
