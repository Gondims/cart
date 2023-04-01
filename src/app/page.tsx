"use client"
import { useEffect, useState, useCallback, useMemo } from "react";
import { cartFunctions } from "../utils/utils";
import Cart from "../components/Cart";
import ListProducts from "../components/ListProducts";
import { type } from "os";
import { CartItem, Product } from '../utils/interfaces'

function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/products.json");
      const jsonData: Product[] = await response.json();
      setProducts(jsonData);
    }
    fetchData();
  }, []);

  const handleAddToCart = useCallback(
    (product: Product) => {
      setCartItems((prevCartItems) =>
        cartFunctions.addToCart(prevCartItems, product)
      );
    },
    [setCartItems]
  );

  const handleAddItem = useCallback(
    (item: CartItem) => {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    },
    [cartItems, setCartItems]
  );

  const handleRemoveItem = useCallback(
    (item: CartItem) => {
      const updatedCartItems = cartItems
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
      setCartItems(updatedCartItems);
    },
    [cartItems, setCartItems]
  );

  const totalPrice = useMemo(
    () => cartFunctions.calculateTotalPrice(cartItems),
    [cartItems]
  );

  return (
    <div className="App">
      <div className="col">
        <ListProducts products={products} addToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          totalPrice={totalPrice}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
        />
      </div>
    </div>
  );
}

export default Home;
