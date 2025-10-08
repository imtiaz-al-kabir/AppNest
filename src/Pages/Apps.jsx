import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Apps = () => {
  const { products, loading } = useProducts();
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setSearchLoading(true);

    const updatedSearch = searchProduct.trim().toLowerCase();

    const timer = setTimeout(() => {
      if (!updatedSearch) {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((p) => p.title.toLowerCase().includes(updatedSearch))
        );
      }
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchProduct, products]);

  const isLoading = loading || searchLoading;

  return (
    <div className="bg-[#f5f5f5] min-h-[calc(100vh-297px)]">
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
          {isLoading ? (
            <LoadingSpinner />
          ) : filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full items-center text-2xl font-bold">
              No Apps Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
