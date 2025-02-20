import React from "react";
import Page1 from "../assets/nuptials-p-1.jpg";
import Page2 from "../assets/nuptials-p-2.jpg";
import Page3 from "../assets/nuptials-p-3.jpg";
import Page4 from "../assets/nuptials-p-4.jpg";
import Page5 from "../assets/nuptials-p-5.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Nuptials = () => {
  return (
    <section className="details-section grid grid-cols-12">
      <div className="col-span-12 my-auto w-full h-full">
        <div className="mt-14 w-full flex flex-col items-center">
          <p className="text-[40px] birthstone">The Nuptials</p>
          <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>
        </div>
        <div className="relative col-span-12 mt-10 mx-auto w-3/4 h-3/4">
          <PhotoProvider>
            <Carousel showDots={true} responsive={responsive}>
              <PhotoView src={Page1}>
                <div className="w-full h-full">
                  <img className="h-full w-full" src={Page1} alt="" />
                </div>
              </PhotoView>
              <PhotoView src={Page2}>
                <div className="w-full h-full">
                  <img className="h-full w-full" src={Page2} alt="" />
                </div>
              </PhotoView>
              <PhotoView src={Page3}>
                <div className="w-full h-full">
                  <img className="h-full w-full" src={Page3} alt="" />
                </div>
              </PhotoView>
              <PhotoView src={Page4}>
                <div className="w-full h-full">
                  <img className="h-full w-full" src={Page4} alt="" />
                </div>
              </PhotoView>
              <PhotoView src={Page5}>
                <div className="w-full h-full">
                  <img className="h-full w-full" src={Page5} alt="" />
                </div>
              </PhotoView>
            </Carousel>
          </PhotoProvider>
        </div>
      </div>
    </section>
  );
};

export default Nuptials;
