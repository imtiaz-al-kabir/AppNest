import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
const formatDownloads = (num) => {
  if (num >= 1000000) return num / 1000000;
  if (num >= 100000) return num / 100000;
};
const AppDetails = () => {
  const location = useLocation();
  const product = location.state;
  const {
    image,
    title,
    downloads,
    ratingAvg,
    ratings,
    description,
    reviews,
    companyName,
    size,
    id,
  } = product;

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = existingList.some((item) => item.id === id);
    setIsInstalled(alreadyInstalled);
  }, [id]);

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = existingList.some((item) => item.id === id);

    if (!alreadyInstalled) {
      const updatedList = [...existingList, product];
      localStorage.setItem("installation", JSON.stringify(updatedList));
      alert("installed");
      setIsInstalled(true);
    }
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-11/12 mx-auto py-10">
        <div className=" p-5 border-b-1 border-gray-300 ">
          <div className="bg-[#f5f5f5] py-5 flex flex-col sm:flex-row gap-10">
            <div className="size-50 mx-auto sm:mx-10 sm:size-50 md:size-90">
              <img className="w-full" src={image} alt={title} />
            </div>
            <div>
              <h1 className="text-start text-2xl  font-bold pt-8">{title}</h1>
              <p className="border-b-1 border-gray-300 pb-8 text-[#627382]">
                Developed by{" "}
                <span className="text-purple-600 font-medium">
                  {companyName}
                </span>
              </p>

              <div className="flex gap-7 pt-15">
                <div>
                  <img className="size-7" src={downloadIcon} alt="" />
                  <p className="text-[#314558]">Downloads</p>
                  <h1 className="text-lg font-bold text-green-600">
                    {formatDownloads(downloads)}M
                  </h1>
                </div>

                <div>
                  <img className="size-7" src={ratingIcon} alt="ratings" />
                  <p className="text-[#314558]">Average Ratings</p>
                  <span className="text-lg text-orange-500">{ratingAvg}</span>
                </div>
                <div>
                  <img className="size-7" src={reviewIcon} alt="" />
                  <p className="text-[#314558]">Total Reviews</p>
                  <h1 className="text-lg font-bold text-green-600">
                    {reviews}
                  </h1>
                </div>
              </div>
              <button
                disabled={isInstalled}
                onClick={handleAddToInstallation}
                className={`btn btn-lg mt-9 text-white ${
                  isInstalled
                    ? "bg-green-700"
                    : "bg-[#00d390] hover:bg-[#00b87e]"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] p-4  py-10">
          <h2 className="text-lg font-semibold mb-2">Ratings</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...ratings].reverse()}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#ff9500" barSize={20} name={title} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <h1>Description:{description} </h1>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col">
 
  </div>
</div>; */
}
export default AppDetails;
