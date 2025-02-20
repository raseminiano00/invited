import React from "react";
import Japan1 from "../assets/japan-1.jpg";
import Japan2 from "../assets/japan-2.jpg";
import Cebu1 from "../assets/cebu-1.jpg";
import Cebu2 from "../assets/cebu-2.jpg";
import Cebu3 from "../assets/cebu-3.jpg";
import Cebu4 from "../assets/cebu-4.jpg";
import Cebu5 from "../assets/cebu-5.jpg";
import Falls1 from "../assets/falls-1.jpg";
import Falls2 from "../assets/falls-2.jpg";
import Falls3 from "../assets/falls-3.jpg";
import Falls4 from "../assets/falls-4.jpg";
import Falls5 from "../assets/falls-5.jpg";
import Falls6 from "../assets/falls-6.jpg";
import Falls7 from "../assets/falls-7.jpg";
import Falls8 from "../assets/falls-8.jpg";
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
        <div className="col-span-12 my-auto w-full h-full">

            <div className="w-full mt-14 flex flex-col items-center">
              <p className="text-[40px] birthstone">The Prenup</p>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>
            </div>

            <div className='mt-10 px-1 lg:px-5'>
                <Carousel infinite={true} showDots={true} responsive={responsive}>
                  <div className="w-full">
                    <img className="h-full w-full" src={Japan2} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Cebu1} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Cebu2} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Cebu3} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Cebu4} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls1} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls2} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls3} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls4} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls5} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls6} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls7} alt="" />
                  </div>
                  <div className="w-full">
                    <img className="h-full w-full" src={Falls8} alt="" />
                  </div>
                </Carousel>
            </div>
        </div>
    </section>
  );
}

export default Showcase;
