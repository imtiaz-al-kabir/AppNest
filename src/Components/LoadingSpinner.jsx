import { BounceLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#f5f5f5] z-50">
      <BounceLoader color="#5408c1" size={71} />
    </div>
  );
};

export default LoadingSpinner;
