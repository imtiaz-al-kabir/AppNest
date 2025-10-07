import { Link } from "react-router";
import appStoreImg from "../assets/appstore.png";
import playStoreImg from "../assets/playstore.png";
import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-11/12 mx-auto text-center">
        <h1 className="text-7xl font-bold leading-20 pt-20">
          We Build <br /> <span className="text-purple-600">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] py-5 text-xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex justify-center gap-5 py-8">
          <div className="flex justify-center py-5 btn btn-lg ">
            <Link
              target="_blank"
              to="https://www.apple.com/app-store/"
              className="flex items-center gap-2 "
            >
              <img src={appStoreImg} alt="" />
              <span>App Store</span>
            </Link>
          </div>
          <div className="flex justify-center btn btn-lg">
            <Link
              target="_blank"
              to="https://play.google.com/store/games?hl=en"
              className="flex items-center gap-2 "
            >
              <img src={playStoreImg} alt="" />
              <span>Play Store</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
            <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
