import React from "react";

const Details = () => {
    const ramada = `https://www.google.com/maps/place/Ramada+by+Wyndham+Manila+Central/@14.600043,120.9724711,17z/data=!3m1!4b1!4m23!1m13!4m12!1m4!2m2!1d121.0449762!2d14.5909459!4e1!1m6!1m2!1s0x3397d4833ee18f8f:0x833d1b036c537460!2sramada+by+wyndham!2m2!1d120.9750489!2d14.6000379!3m8!1s0x3397d4833ee18f8f:0x833d1b036c537460!5m2!4m1!1i2!8m2!3d14.600043!4d120.975046!16s%2Fg%2F1tx_3xbj?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D`;
    const church = `https://www.google.com/maps/place/Minor+Basilica+and+National+Shrine+of+Saint+Lorenzo+Ruiz+-+Binondo+Church+(Archdiocese+of+Manila)/@14.60007,120.9718681,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3397ca10158a9393:0xbdbc7e01f60e0cc1!2s1006+Plaza+Lorenzo+Ruiz,+Binondo,+1006+Metro+Manila!2m2!1d120.9744116!2d14.6001173!3m5!1s0x3397ca10158a9393:0xbdbc7e01f60e0cc1!8m2!3d14.60007!4d120.974443!16s%2Fm%2F0h1by3g?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D`;
    const handleOpenUrl = ({url}) => {
        window.open(url, "_blank");
    };

  return (
    <section className="details-section grid grid-cols-12 bg-slate-50">
        <div className="col-span-12 my-auto w-full h-[690px]">
            <div className="w-full  flex flex-col items-center">
                <div className="mt-8">
                    <p className="text-[40px] birthstone">The Wedding</p>
                </div>
                <div className="mt-4 h-[2px] w-[90%] bg-emerald-600"></div>

                <div>
                    <div className="mt-4 flex flex-col items-center text-center gap-1">
                        <p className="text-xl">Minor Basilica & National Shrine</p>
                        <p className="text-xl">of Saint Lorenzo Ruiz</p>
                        <p className="text-sm">BINONDO CHURCH (ARCHDIOCESE OF MANILA)</p> 
                    </div>
                    

                    <div className="mt-4 flex flex-col items-center gap-1">
                        <p>Friday, May 23, 2025</p>
                        <p>2:00 p.m.</p>

                        <button className="mt-4 bg-emerald-600 rounded-sm p-4 color-white text-white">
                            Pin <a href={church} target="_blank" rel="noopener noreferrer"> Location</a>
                        </button>
                    </div>
                </div>

                                
                <div className="mt-8 flex flex-col items-center text-center gap-1">
                    <p className="text-sm">Reception follows at</p>
                    <p className="text-xl">Ramada by Wyndham</p>
                    <p className="text-xl">Manila Central</p>
                    <p className="text-sm">ONGPIN ST. SANTA CRUZ,</p> 
                    <p className="text-sm">METRO MANILA</p> 
                </div>

                

                <div className="mt-4 flex flex-col items-center gap-1">
                    <p>5:00 p.m.</p>

                    <button className="mt-4 bg-emerald-600 rounded-sm p-4 color-white text-white">
                        Pin <a href={ramada} target="_blank" rel="noopener noreferrer"> Location</a>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Details;
