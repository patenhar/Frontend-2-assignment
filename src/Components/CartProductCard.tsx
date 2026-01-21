import type { UUID } from "crypto";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../Contexts/CartProvider";
import { useFetch } from "../Hooks/useFetch";

interface CartProductCard {
  id: UUID;
  quantity: number;
}

export default function CartProductCard({ id, quantity }: CartProductCard) {
  const {
    cartItems,
    isAlreadyInCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useContext(CartContext);
  console.log(id);

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`,
  );
  console.log(data);

  return (
    <div className="bg-gray-100 w-90 flex flex-col items-center border-0 rounded-sm">
      <div className="border-0 rounded-sm relative">
        <img
          src={data?.images[0]}
          alt="Product image"
          className="border-0 rounded-sm"
        />
        <div className="absolute top-5 right-5 flex flex-col gap-2">
          {data?.price > 500 && (
            <div className="p-1 px-2 text-center border-0 rounded-2xl bg-yellow-500 text-white">
              Premium
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start w-full p-5">
        <h1 className="font-bold text-xl pb-1">{data?.title}</h1>
        <p className="text-sm pb-2">{data?.description}</p>
        <h5 className="text-lg pb-2 font-medium">
          $ {data?.price} ({data?.category}) x {quantity}
        </h5>

        <div className="flex w-full gap-2">
          {/* {isAlreadyInCart(id) ? ( */}
          <button
            onClick={(e) => decreaseQuantity(e.currentTarget.id)}
            id={id}
            className="bg-red-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            -
          </button>

          <button
            onClick={(e) => increaseQuantity(e.currentTarget.id)}
            id={id}
            className="bg-green-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            +
          </button>

          <button
            onClick={(e) => removeFromCart(e.currentTarget.id)}
            id={id}
            className="bg-red-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
