import React from "react";
import 'react-photo-view/dist/react-photo-view.css';

const Reminders = () => {

  return (
    <section className="details-section grid grid-cols-12">
        <div className="col-span-12 my-auto w-full h-[300px]">
          <div className="mt-14 w-full flex flex-col items-center">
                <p className="text-2xl">Reminders</p>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>
            </div>
        </div>
    </section>
  );
}

export default Reminders;
