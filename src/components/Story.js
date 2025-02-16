import React from "react";
import Page1 from "../assets/page-1.png";
import Page2 from "../assets/page-2.png";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Story = () => {

  return (
    <section className="details-section grid grid-cols-12 bg-slate-50">
        <div className="col-span-12 my-auto w-full h-[1050px]">
          <div className="mt-14 w-full flex flex-col items-center">
                <p className="text-2xl">Our Story</p>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>
            </div>
        </div>
    </section>
  );
}

export default Story;
