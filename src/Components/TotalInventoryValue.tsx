import React from "react";

export default function TotalInventoryValue() {
  const storage = Object.values({ ...localStorage });
  const products = storage.map((item, idx) => JSON.parse(item));
  let sumOfPrice = 0;
  for (const product of products) {
    sumOfPrice += product.price;
  }

  return (
    <div className="bg-blue-500 w-full border-0 rounded-md text-center p-2 text-white">
      {sumOfPrice}
    </div>
  );
}
