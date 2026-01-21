import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useFetch } from "../Hooks/useFetch";
import useDebounce from "../Hooks/useDebounce";

export default function Catelog() {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 1000);

  const [category, setCategory] = useState("All");

  useEffect(() => {
    setQuery("");
  }, [category]);

  let url = "https://dummyjson.com/products";

  if (!debouncedValue && category != "All")
    url = `https://dummyjson.com/products/category/${category}`;

  if (debouncedValue)
    url = `https://dummyjson.com/products/search?q=${debouncedValue}`;

  const { data, loading, error } = useFetch(url);

  let {
    data: cat,
    loading: load,
    error: err,
  } = useFetch("https://dummyjson.com/products/category-list");

  let cate = [];
  if (cat) cate = [...cat, "All"].sort();

  if (loading || load) return <p>Loading...</p>;
  if (error || err) return <p>Something went wrong</p>;

  return (
    <div className="mt-14">
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
      <div className="p-10 gap-10 flex flex-wrap justify-start mx-auto w-fit">
        {data.products.length == 0 ? (
          <p>No results found</p>
        ) : (
          data?.products?.map((product) => (
            <ProductCard
              id={product.id}
              imageUrl={product.images[0]}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
              key={product.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
