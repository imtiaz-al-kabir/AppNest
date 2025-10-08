import { Link } from "react-router";

import LoadingSpinner from "../Components/LoadingSpinner";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Trending = () => {
  const { products, loading } = useProducts();

  const trendingProducts = products.slice(0, 8);
  return (
    <div className="bg-[#f5f5f5]">
      <div className="text-center w-11/12 mx-auto">
        <h1 className="text-4xl font-bold pt-20 pb-4">Trending Apps</h1>
        <p className="text-[#627382] text-xl pb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 gap-6">
          {loading ? (
            <LoadingSpinner />
          ) : (
            trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        <div className="pt-10 pb-20">
          <Link
            to="/apps"
            className="btn  bg-gradient-to-r from-[#632ee3] text-xl to-[#9f62f2] text-white"
          >
            {" "}
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
