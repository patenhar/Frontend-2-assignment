import React from "react";

export default function LowStockAlert() {
  const storage = Object.values({ ...localStorage });
  const products = storage.map((item, idx) => JSON.parse(item));
  let sumOfQuantity = 0;
  for (const product of products) {
    sumOfQuantity += product.quantity;
  }

  return (
    <>
      {sumOfQuantity < 25 && (
        <div className="bg-red-500 w-full border-0 rounded-md text-center p-2 text-white">
          Low Stock
        </div>
      )}
    </>
  );
}
