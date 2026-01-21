import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useFetch } from "../Hooks/useFetch";
// import useDebounce from "../Hooks/useDebounce";

export default function Catelog() {
  const [query, setQuery] = useState("");
  // const debouncedValue = useDebounce(query, 1000);

  const [category, setCategory] = useState("All");

  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  console.log(data);

  let {
    data: cat,
    loading: lod,
    error: err,
  } = useFetch("https://dummyjson.com/products/category-list");

  let cate = [];
  if (cat) cate = [...cat, "All"].sort();

  const filteredProducts = data?.products.filter((product) => {
    const searched = product.title.toLowerCase().includes(query.toLowerCase());
    const filtered = category === "All" || product.category === category;
    return searched && filtered;
  });

  return (
    <>
      <div className="pt-4 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {cat &&
            cate?.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
        </select>
      </div>
      <div className="p-10 gap-10 flex flex-wrap justify-start">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              key={product.id}
            />
          ))}
      </div>
    </>
  );
}
