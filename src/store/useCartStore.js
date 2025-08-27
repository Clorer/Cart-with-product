import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    if (get().findInCart(product)) {
      set((state) => ({
        cart: state.cart.map((prod) =>
          prod.id === product.id ? { ...prod, count: prod.count + 1 } : prod
        ),
      }));
    } else {
      set((state) => ({
        cart: [...state.cart, product],
      }));
    }
  },

  findInCart: (product) => {
    const cart = get().cart;
    return cart.find((prod) => prod.id === product.id);
  },

  counter: (product) => {
    return get().findInCart(product).count;
  },

  removeFromCart: (product) => {
    if(get().findInCart(product).count == 1){
    set((state) => ({
      cart: state.cart.filter((prod) => prod.id != product.id),
    }));
    } else {
        set((state) => ({
            cart: state.cart.map((prod) => ({...prod, count: prod.count - 1}))
        }))
    }
  },

  removeAllFromCart: () => {
    set((state) => ({
        cart: []
    }))
  },

  totalPrice: () => {
    const cart = get().cart;
    let tprice = 0;
    cart.forEach((prod) => {
      tprice += prod.price * prod.count;
    });
    return tprice;
  },
}));
