import { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
const formatDownloads = (num) => {
  if (num >= 1000000) return num / 1_000_000;
};
const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOder] = useState(null);
  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installation"));

    if (installed) setInstallation(installed);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-dsc") {
      return [...installation].sort((a, b) => b.size - a.size);
    } else {
      return installation;
    }
  })();

  const handleUninstall = (id) => {
    const installed = JSON.parse(localStorage.getItem("installation"));
    let updateList = installed.filter((p) => p.id !== id);
    setInstallation((prev) => prev.filter((p) => p.id !== id));
    localStorage.setItem("installation", JSON.stringify(updateList));
  };
  return (
    <div className="bg-[#f5f5f5] pb-14">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center px-5 py-4">
          <h1>({sortedItem.length}) Apps found</h1>
          <label
            htmlFor=""
            className="border border-gray-200 rounded-md px-5 py-2"
          >
            <select
              Value={sortOrder}
              onChange={(e) => setSortOder(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low &gt; high</option>
              <option value="size-dsc">High &gt; Low</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col  gap-3">
          {sortedItem.map((product) => (
            <div className="l ">
              <div className="bg-white  flex justify-between items-center rounded-2xl px-10 py-3">
                <div className="flex items-center gap-4">
                  <div className="size-20 flex justify-center items-center ">
                    <img
                      className="w-full"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div>
                    <h1 className="text-start text-xl  font-bold ">
                      {product.title}
                    </h1>

                    <div className="flex gap-7 ">
                      <div className="flex gap-1 items-center">
                        <img className="size-5" src={downloadIcon} alt="" />

                        <h1 className="text-lg font-bold text-green-600">
                          {formatDownloads(product.downloads)}M
                        </h1>
                      </div>

                      <div className="flex gap-1 items-center">
                        <img
                          className="size-5"
                          src={ratingIcon}
                          alt="ratings"
                        />

                        <span className="text-lg text-orange-500">
                          {product.ratingAvg}
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <h1>{product.size}MB</h1>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <button
                  onClick={() => handleUninstall(product.id)}
                  className="btn bg-green-400 text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
