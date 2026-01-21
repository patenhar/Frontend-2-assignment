import React, { useEffect, useContext } from "react";
import { CartContext } from "../Contexts/CartProvider";
import CartProductCard from "../Components/CartProductCard";
import { useFetch } from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, clearCart, getTotalItems, getTotalPrice } =
    useContext(CartContext);

  return (
    <div className="mt-14">
      <div className="flex p-2 gap-2">
        <div className="bg-blue-500 text-white border-0 rounded-sm w-full flex justify-center items-center">
          {getTotalItems()}
        </div>
        <div className="bg-blue-500 text-white border-0 rounded-sm w-full flex justify-center items-center">
          {getTotalPrice()}
        </div>
        <button
          onClick={() => clearCart()}
          className="bg-red-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
        >
          Clear Cart
        </button>
        {cartItems.length > 0 && (
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            Checkout
          </button>
        )}
      </div>

      <div className="p-10 gap-10 flex flex-wrap justify-start">
        {cartItems &&
          cartItems.map((product) => (
            <CartProductCard
              id={product.id}
              quantity={product.quantity}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
}
