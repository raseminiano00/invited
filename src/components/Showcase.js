import React from "react";
import Page1 from "../assets/page-1.png";
import Page2 from "../assets/page-2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Showcase = () => {

  return (
    <section className="details-section grid grid-cols-12 ">
        <div className="col-span-12 my-auto w-full h-[800px]">

            <div className="mt-14 w-full flex flex-col items-center">
                <p className="text-2xl">PRENUP</p>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>
            </div>

            <div className='mt-14'>
                <Carousel showDots={true} responsive={responsive}>
                  <div className="w-full">
                    <img className="h-full w-full" src={Page1} alt="" />
                  </div>
                  
                  <div className="w-full">
                    <img className="h-full w-full" src={Page2} alt="" />
                  </div>
                  
                  <div className="w-full">
                    <img className="h-full w-full" src={Page1} alt="" />
                  </div>
                  
                  <div className="w-full">
                    <img className="h-full w-full" src={Page2} alt="" />
                  </div>
                </Carousel>;
            </div>

        </div>
    </section>
  );
}

export default Showcase;
