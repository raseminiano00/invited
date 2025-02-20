import React from "react";
import BannerImage from "../assets/japan-1.jpg";

const Banner = () => {

  return (
    <section className="banner-section grid grid-cols-12">
    <div className="col-span-12 my-auto w-full h-[500px] sm:h-[900px]">
      <img className="h-full w-full object-cover" src={BannerImage} alt="Girl in a jacket"/>
      <div className="absolute top-[6rem] lg:top-[12rem] w-full  text-white flex flex-col items-center">
      <h1 className="tracking-[0.5rem] lg:tracking-[0.8rem] text-[30px] lg:text-[60px] ephesis">Darwin</h1>
      <h1 className="tracking-[0.5rem] lg:tracking-[0.8rem] text-[30px] lg:text-[60px] ephesis">&</h1>
      <h1 className="tracking-[0.5rem] lg:tracking-[0.8rem] text-[30px] lg:text-[60px] ephesis">Sheena</h1>
      </div>
    </div>
    </section>
  );
}

export default Banner;
