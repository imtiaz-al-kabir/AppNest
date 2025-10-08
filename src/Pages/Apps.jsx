import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { products, loading } = useProducts();
  const [searchProduct, setSearchProduct] = useState("");

  const updatedSearch = searchProduct.trim().toLowerCase();
  console.log(updatedSearch);
  const filteredProducts = updatedSearch
    ? products.filter((product) =>
        product.title.toLowerCase().includes(updatedSearch)
      )
    : products;

  if (filteredProducts.length <= 0) <p> No apps </p>;
  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-11/12 mx-auto text-center">
        <h1 className="text-4xl font-bold pt-20 pb-4">Our All Applications</h1>
        <p className="text-[#627382] text-xl pb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center py-4">
          <h1>({filteredProducts.length}) Apps Found</h1>
          <input
            defaultValue={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="input focus-within:outline-none"
          />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 gap-6">
          {loading ? (
            <LoadingSpinner />
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
