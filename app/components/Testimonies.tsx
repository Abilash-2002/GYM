import Image from "next/image";
import Link from "next/link";
import React from "react";

function Testimonies() {
  return (
    <section id="latest-blog">
      <div className="px-8 py-16 space-y-12 bg-grey">
        <div className="relative flex flex-col gap-4 items-center text-center">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={200}
            height={200}
            className="absolute left-[3.75rem] lg:left-[39.25rem] -top-1.5"
          />
          <p className="text-white relative z-10 font-bold text-right mb-4 ">
            TESTIMONIALS
          </p>
          <h1 className="font-bold text-4xl text-red-700 ">Our Recent Testimonies</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-8 lg:gap-4">
          <div className="bg-white shadow-xl p-8 flex flex-col gap-6 lg:justify-between">
            <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
            <span className="text-2xl">👤</span>
              <h3 className="font-bold py-1 px-3 rounded-full border border-[#323232] w-fit">
                Kamal
              </h3>
              </div>
              <h1 className="text-xl font-bold"> Genuine Results !!!</h1>
              <p className="-mt-2">
              This is a program designed to achieve your goals by concentrating on your health and fitness.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="text-white flex items-center gap-4 bg-[#FF0336] font-bold px-5 py-3 w-fit"
              >
                <span>READ MORE</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-xl p-8 flex flex-col gap-6 lg:justify-between">
            <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
            <span className="text-2xl">👤</span>
            <h3 className="font-bold py-1 px-3 rounded-full border border-[#323232] w-fit">
                Rajeev
              </h3>
             </div> 
              <h1 className="text-xl font-bold">
                Exceptional Training !!!
              </h1>
              <p className="-mt-2">
              Exceptional Training by Vishnu offers unparalleled guidance ensuring remarkable results.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="text-white flex items-center gap-4 bg-[#FF0336] font-bold px-5 py-3 w-fit"
              >
                <span>READ MORE</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-xl p-8 flex flex-col gap-6 lg:justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-2">
              <span className="text-2xl">👤</span>
               <h3 className="font-bold py-1 px-3 rounded-full border border-[#323232] w-fit flex items-center justify-center" >
                Vimal
              </h3>
              </div>
              <h1 className="text-xl font-bold">
                ExtraOrdinary Classes !!!
              </h1>
              <p className="-mt-2">
              Exceptional Workouts with trainer offer a distinctive and powerful training experience, helping you exceed your limits.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="text-white flex items-center gap-4 bg-[#FF0336] font-bold px-5 py-3 w-fit"
              >
                <span>READ MORE</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
