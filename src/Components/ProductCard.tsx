import type { UUID } from "crypto";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface ProductCardProps {
  id: UUID;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export default function ProductCard({
  id,
  title,
  description,
  price,
}: ProductCardProps) {
  const addToCart = (e) => {};
  const removeFromCart = () => {};

  const removeProduct = (e) => {
    console.log(id);
    if (localStorage.getItem(id)) localStorage.removeItem(id);
    toast.success("Deleted");
  };
  return (
    <div className="bg-gray-100 w-70 flex flex-col items-center border-0 rounded-sm">
      <div className="border-0 rounded-sm relative">
        <div className="absolute top-5 right-5 flex flex-col gap-2">
          {price > 500 && (
            <div className="p-1 px-2 text-center border-0 rounded-2xl bg-yellow-500 text-white">
              Premium
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start w-full p-5">
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
        <h5>$ {price}</h5>

        <div className="flex w-full gap-2">
          <button
            onClick={addToCart}
            id={id}
            className="bg-blue-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
