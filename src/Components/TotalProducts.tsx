import React from "react";

export default function TotalProducts() {
  const storage = Object.values({ ...localStorage });
  const products = storage.map((item, idx) => JSON.parse(item));
  let sumOfQuantity = 0;
  for (const product of products) {
    sumOfQuantity += product.quantity;
  }

  return (
    <div className="bg-blue-500 w-full border-0 rounded-md text-center p-2 text-white">
      {sumOfQuantity}
    </div>
  );
}
