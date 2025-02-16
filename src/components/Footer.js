import React from "react";
import 'react-photo-view/dist/react-photo-view.css';

const Footer = () => {

  return (
    <section className="details-section grid grid-cols-12">
        <div className="col-span-12 my-auto w-full h-[300px]">
          <div className="mt-14 w-full flex flex-col items-center">
                <p className="text-[40px] ephesis">Darwin & Sheena</p>
                <p className="text-xl ephesis">March 20, 2024</p>
            </div>
        </div>
    </section>
  );
}

export default Footer;
