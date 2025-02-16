import React from "react";

const RsvpForm = () => {
  return (
    <section>
      <iframe
        className="mx-auto mt-14 w-5/6 bg-slate-50"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfb_T15O_Y28M-G_VUSUoX7riLBCO6pcCv1jGO2KpOJRU8DtA/viewform?embedded=true"
        height="1500"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>

      
      <div className="col-span-12 my-auto w-full h-[300px]">
      <div className="mt-8 w-full flex flex-col items-center">
            <p className="text-2xl">RSVP Inquries</p>
            <div className="text-center w-3/4">
              <p>For further RSVP questions, please do not hesitate to message us directly!</p>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
