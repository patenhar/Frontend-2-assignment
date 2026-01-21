import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function OutOfStockOverlay() {
  const [open, setOpen] = useState(false);

  const storage = Object.values({ ...localStorage });
  console.log(storage);
  const products = storage.map((item, idx) => JSON.parse(item));

  const outOfStockItems = products.filter((product) => {
    return product.quantity === 0;
  });
  console.log(outOfStockItems);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-blue-500 text-white rounded-sm cursor-pointer"
      >
        Out Of Stock Items
      </button>
      {open && (
        <div className="z-100 fixed inset-0 bg-black flex flex-col gap-4 items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="p-2 bg-blue-500 text-white rounded-sm cursor-pointer"
          >
            Close
          </button>
          <div className="bg-white p-6 rounded-md flex flex-wrap gap-10">
            {outOfStockItems &&
              outOfStockItems.map((product) => (
                <ProductCard
                  id={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  quantity={product.quantity}
                  key={product.id}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
