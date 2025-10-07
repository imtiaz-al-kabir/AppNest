const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-center ">
      <h1 className="text-4xl text-center font-bold pt-20">
        Trusted by Millions, Built for You
      </h1>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-15 py-10">
        <div>
          <h5>Total Downloads</h5>
          <h1 className="text-6xl font-bold py-4">29.6M</h1>
          <p className="text-xs">21% more than last month</p>
        </div>
        <div>
          <h5>Total Reviews</h5>
          <h1 className="text-6xl font-bold py-4"  >906K</h1>
          <p className="text-xs" >46% more than last month</p>
        </div>
        <div>
          <h5>Active Apps</h5>
          <h1 className="text-6xl font-bold py-4" >132+</h1>
          <p className="text-xs" >31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
