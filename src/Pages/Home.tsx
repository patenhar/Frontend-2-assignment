import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import ProductForm from "../Components/ProductForm";
import TotalProducts from "../Components/TotalProducts";
import TotalInventoryValue from "../Components/TotalInventoryValue";
import LowStockAlert from "../Components/LowStockAlert";
import OutOfStockOverlay from "../Components/OutOfStockOverlay";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const storage = Object.values({ ...localStorage });
  console.log(storage);
  const products = storage.map((item, idx) => JSON.parse(item));

  const filteredProducts = products.filter((product) => {
    const searched = product.title.toLowerCase().includes(query.toLowerCase());
    const filtered = category === "All" || product.category === category;
    return searched && filtered;
  });

  return (
    <div className="p-10 gap-10 flex flex-wrap justify-start">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Electronics">Electronics</option>
      </select>

      <OutOfStockOverlay />

      <div className="flex w-full gap-10">
        <TotalProducts />
        <TotalInventoryValue />
        <LowStockAlert />
      </div>

      <ProductForm />

      {products &&
        filteredProducts.map((product) => (
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
  );
}
