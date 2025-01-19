import React from "react";

const Details = () => {

  return (
    <section className="details-section grid grid-cols-12 bg-slate-50">
        <div className="col-span-12 my-auto w-full h-[325px]">
            <div className="w-full  flex flex-col items-center">
                <div className="mt-14">
                    <p className="text-2xl">The Wedding</p>
                </div>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>

                <div className="mt-4 flex flex-col items-center gap-1">
                    <p>The Ramada Hotel</p>
                    <p>1008 Masangkay St. Binondo Manila</p> 
                </div>
                

                <div className="mt-8 flex flex-col items-center gap-1">
                    <p>Tuesday, March 20, 2025</p>
                    <p>4:30 p.m.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Details;
