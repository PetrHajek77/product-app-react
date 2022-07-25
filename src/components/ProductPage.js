import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/fetchProducts";
import { ProductItem } from "./ProductItem";

export function ProductPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const _products = await fetchProducts();
      setProducts(_products);
    };

    getData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="page">
      <input
        onChange={handleSearch}
        className="input mb-2"
        style={{ width: "250px" }}
        type="text"
        placeholder="filter by title"
      ></input>
      <div className="columns is-multiline">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((product) => (
            <div className="column is-4" key={product.image}>
              <ProductItem product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}
