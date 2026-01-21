import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  );

  const isAlreadyInCart = (id) => {
    const isItemInCart = cartItems.find((item) => item.id == id);
    return isItemInCart !== undefined;
  };

  const addToCart = (id) => {
    const isItemInCart = cartItems.find((item) => item.id === id);

    if (!isItemInCart) {
      setCartItems([...cartItems, { id, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems
      .map((item) => {
        const { data } = useFetch(`https://dummyjson.com/products/${item.id}`);
        return data?.product.price * item.quantity;
      })
      .reduce((total, itemTotal) => total + itemTotal, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isAlreadyInCart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
