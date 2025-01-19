import React from "react";
import BannerImage from "../assets/sheena.jpg";

const Banner = () => {

  return (
    <section className="banner-section grid grid-cols-12">
    <div className="col-span-12 my-auto w-full h-[500px] sm:h-[900px]">
      <img className="h-full w-full" src={BannerImage} alt="Girl in a jacket"/>
      <div className="absolute top-60 sm:top-1/2 w-full  text-white flex flex-col items-center">
      <p className="tracking-[0.3rem] lg:tracking-[0.8rem] text-xl lg:text-4xl font-light">DARWIN & SHEENA</p>
      
      <p className="text-[0.6rem] lg:text-[1rem]  tracking-[0.1rem] font-thin lg:mt-6">BINONDO, MNL • MARCH 20, 2025</p>
      </div>
    </div>
    </section>
  );
}

export default Banner;
