import React from "react";
import Attire from "../assets/attire-design.png";
import "react-photo-view/dist/react-photo-view.css";

const DressCode = () => {
  return (
    <section className="details-section grid grid-cols-12">
      <div className="col-span-12 my-auto w-full h-full">
        <div className="mt-14 w-full flex flex-col items-center">
          <p className="text-[40px] birthstone">Dress Code</p>
          <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>

          <div className="mt-10 w-3/4">
            <p>Please join us in your most elegant attire. For guidance:</p>

            <div class="ml-5">
              <ul  className="list-disc">
                <li>
                  For Ladies - Long gowns, dresses, cocktail dresses, or dressy
                  separates.
                </li>
                <li>
                  Gentlemen: Long Sleeves and Pants (Coat is optional)
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <p>
                Please wear our wedding hues below. Kindly refrain from wearing black or white to maintain the celebratory spirit and to honor the bride and groom.
              </p>
              <p class="mt-4">
                Your cooperation means the world to us, and we can't wait to see you dressed to impress!
              </p>
            </div>
          </div>
          <div class="" >
            <img className="mx-auto w-64 h-64" src={Attire} alt="" />
            

            <div className="w-full h-20 flex flex-row gap-4 items-center justify-center">
              <div class="h-12 w-12 rounded-full bg-radial bg-[#2E6D26]"></div>
              <div class="h-12 w-12 rounded-full bg-radial bg-[#5B8E55]"></div>
              <div class="h-12 w-12 rounded-full bg-radial bg-[#87AE81]"></div>
              <div class="h-12 w-12 rounded-full bg-radial bg-[#B3CEAF]"></div>
              <div class="h-12 w-12 rounded-full bg-radial bg-[#E0EFDC]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
