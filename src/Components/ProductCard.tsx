import type { UUID } from "crypto";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../Contexts/CartProvider";

interface ProductCardProps {
  id: UUID;
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

export default function ProductCard({
  id,
  imageUrl,
  title,
  description,
  category,
  price,
}: ProductCardProps) {
  const {
    cartItems,
    isAlreadyInCart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useContext(CartContext);

  return (
    <div className="bg-gray-100 w-90 flex flex-col items-center border-0 rounded-sm">
      <div className="border-0 rounded-sm relative">
        <img
          src={imageUrl}
          alt="Product image"
          className="border-0 rounded-sm"
        />
        <div className="absolute top-5 right-5 flex flex-col gap-2">
          {price > 500 && (
            <div className="p-1 px-2 text-center border-0 rounded-2xl bg-yellow-500 text-white">
              Premium
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start w-full p-5">
        <h1 className="font-bold text-xl pb-1">{title}</h1>
        <p className="text-sm pb-2">{description}</p>
        <h5 className="text-lg pb-2 font-medium">
          $ {price} ({category})
        </h5>

        <div className="flex w-full gap-2">
          {/* {isAlreadyInCart(id) ? (
            <button
              onClick={(e) => removeFromCart(e.currentTarget.id)}
              id={id}
              className="bg-red-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
            >
              Remove
            </button>
          ) : ( */}
          <button
            onClick={(e) => addToCart(e.currentTarget.id)}
            id={id}
            className="bg-blue-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            {isAlreadyInCart(id) ? "Add more" : "Add to cart"}
          </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
