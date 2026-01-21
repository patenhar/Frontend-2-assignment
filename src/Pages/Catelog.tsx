import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useFetch } from "../Hooks/useFetch";

export default function Catelog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) console.log("loading...");
  if (error) console.log(error);
  if (!error) console.log(data?.products);

  const {
    data: cat,
    loading: lod,
    error: err,
  } = useFetch("https://dummyjson.com/products/category-list");

  const filteredProducts = data?.products.filter((product) => {
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
        {cat &&
          cat?.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
      </select>

      {filteredProducts &&
        filteredProducts.map((product) => (
          <ProductCard
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
          />
        ))}
    </div>
  );
}
