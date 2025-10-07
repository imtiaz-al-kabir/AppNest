import ratingIcon from "../assets/icon-ratings.png";

const ProductCard = ({product}) => {

    const {title,image}=product
  return (
    <div className="bg-white p-3 rounded-xl hover:scale-105 transition-all">
      <div className="bg-[#f5f5f5] py-5 rounded-2xl">
        <img
          className="h-80 mx-auto"
          src={image}
          alt={title}
        />

        <h1 className="text-start text-2xl p-5 font-bold ">{title}</h1>
        <div className="flex justify-between px-5">
          <div className="bg-[#f1f5e8] px-3 py-1 rounded-md btn btn-xs">
            <h1 className="text-lg font-bold">9M</h1>
          </div>
          <div className="bg-[#fff0e1] btn btn-xs px-3 ">
            <img className="size-4" src={ratingIcon} alt="ratings" />
            <span className="text-lg">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
