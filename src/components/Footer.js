import React from "react";
import FooterImage from "../assets/footer-image.jpg";
import 'react-photo-view/dist/react-photo-view.css';

const Footer = () => {

  return (
    <section className="details-section grid grid-cols-12">
        <div className="col-span-12 my-auto w-full h-[550px]">
        <div className='px-1 lg:px-5'>
                <div className="w-full h-full">
                    <img className="h-full w-full" src={FooterImage} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Footer;
