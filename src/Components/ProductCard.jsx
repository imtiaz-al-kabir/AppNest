import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
const formatDownloads = (num) => {
  if (num >= 1000000) return num / 1_000_000;
};
const ProductCard = ({ product }) => {
  const { title, image, ratingAvg,id } = product;
  return (
    <Link
    state={product}
      to={`/app-details/${id}`}
      className="bg-white p-3 rounded-xl hover:scale-105 transition-all"
    >
      <div className="bg-[#f5f5f5] py-5 rounded-2xl">
        <img className="h-80 mx-auto" src={image} alt={title} />

        <h1 className="text-start text-2xl p-5 font-bold ">{title}</h1>
        <div className="flex justify-between px-5">
          <div className="bg-[#f1f5e8] px-3 py-1 rounded-md btn btn-xs">
            <img className="size-4" src={downloadIcon} alt="" />
            <h1 className="text-lg font-bold text-green-600">
              {formatDownloads(product.downloads)}M
            </h1>
          </div>
          <div className="bg-[#fff0e1] btn btn-xs px-3 ">
            <img className="size-4" src={ratingIcon} alt="ratings" />
            <span className="text-lg text-orange-500">{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
