import React, { useEffect, useContext } from "react";
import { CartContext } from "../Contexts/CartProvider";
import CartProductCard from "../Components/CartProductCard";
import { useFetch } from "../Hooks/useFetch";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-10 gap-10 flex flex-wrap justify-start">
      {cartItems &&
        cartItems.map((product) => (
          <CartProductCard id={product.id} key={product.id} />
        ))}
    </div>
  );
}
