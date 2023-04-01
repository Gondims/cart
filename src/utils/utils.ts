
import {Product, CartItem} from './interfaces'

interface CartFunctions{
  addToCart: (cartItems: CartItem[], product: Product) => CartItem[];
  calculateTotalPrice: (cartItems: CartItem[]) => string;
}

export const cartFunctions: CartFunctions = {
  addToCart: (cartItems: CartItem[], product: Product): CartItem[] => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if(existingItem) {
      return cartItems.map((item) => 
      item.id === product.id ? {...item, quantity: item.quantity +1 } : item
      );
    }
    return [...cartItems, { ...product, quantity: 1 }];
  },

  calculateTotalPrice: (cartItems: CartItem[]): string => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice.toFixed(2);
  }
}
