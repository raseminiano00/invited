import React from "react";
import Reminder from "../assets/reminders.jpg";
import FooterImage from "../assets/footer-image.jpg";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Reminders = () => {

  return (
    <section className="details-section grid grid-cols-12">
        <div className="col-span-12 my-auto w-full h-full">
          <div className="mt-14 w-full flex flex-col items-center">
                <p className="text-2xl">Reminders</p>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>
            </div>

            <div className='mt-10 px-1 lg:px-5'>
              <PhotoProvider>
                  <PhotoView src={Reminder}>
                    <div className="w-full h-full">
                    <img className="h-full w-full" src={Reminder} alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src={FooterImage}>
                    <div className="w-full mt-8 h-full">
                    <img className="h-full w-full" src={FooterImage} alt="" />
                    </div>
                  </PhotoView>
              </PhotoProvider>
            </div>
        </div>
    </section>
  );
}

export default Reminders;
