import type { UUID } from "crypto";
import React, { useState } from "react";
import { toast } from "react-toastify";
import EditProduct from "./EditProduct";

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
  imageUrl,
  title,
  description,
  price,
  quantity,
}: ProductCardProps) {
  // const updateProduct = (e) => {
  //   const product = localStorage.getItem(id);
  //   if (product) <EditProduct product={JSON.parse(product)} />;
  // };
  const removeProduct = (e) => {
    console.log(id);
    if (localStorage.getItem(id)) localStorage.removeItem(id);
    toast.success("Deleted");
  };
  return (
    <div className="bg-gray-100 w-70 flex flex-col items-center border-0 rounded-sm">
      <div className="border-0 rounded-sm relative">
        <img
          src={imageUrl}
          alt="Product image"
          className="border-0 rounded-sm"
        />
        <div className="absolute top-5 right-5 flex flex-col gap-2">
          {quantity < 5 && (
            <div className="p-1 px-2 text-center border-0 rounded-2xl bg-orange-500 text-white">
              Low stock
            </div>
          )}
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
        <h5>{quantity}</h5>

        <div className="flex w-full gap-2">
          <EditProduct product={JSON.parse(localStorage.getItem(id))} />
          <button
            onClick={removeProduct}
            id={id}
            className="bg-red-500 text-white border-0 rounded-sm p-2 w-full cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
