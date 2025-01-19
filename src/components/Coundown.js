import React, { useState, useEffect } from "react";

const Countdown = () => {
    const targetDate = new Date("March 20, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section grid grid-cols-12 bg-emerald-800">
    <div className="col-span-12 my-auto w-full h-[300px]">
        <div className="w-full flex flex-col items-center">

            <div className="w-3/4 mt-24 h-32 my-auto border-[1px] border-slate-50 bg-emerald-700">
                
                <div className="text-white flex mx-auto gap-4 w-3/4  justify-center mt-10">
                    <div className="flex flex-col items-center">
                        <p>{timeLeft.days}</p>
                        <p>Days</p>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col items-center">
                        <p>{timeLeft.hours}</p>
                        <p>Hours</p>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col items-center">
                        <p>{timeLeft.minutes}</p>
                        <p>Mins</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Countdown;
