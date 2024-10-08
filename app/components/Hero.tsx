'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


// Define the ResponsiveBackground component

function Hero() {
  const [bgImage, setBgImage] = useState('/images/bg/image.jpg');

 useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setBgImage('/images/bg/small.jpg');
      } else {
        setBgImage('/images/bg/image.jpg');
      }
    };

    handleResize(); // Set the initial background image based on the current window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero">
      <div
        className="h-screen w-screen bg-cover bg-[50%] flex justify-end items-center text-white px-16 relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: '50%',
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-75"></div>
        <div className="hidden lg:flex gap-4 flex-row-reverse -rotate-90 text-white absolute top-2/4 items-center">
          {/* <p className="uppercase text-xl font-bold tracking-widest">share</p>
          <span className="w-10 bg-[#FF0336] h-[0.1563rem]"></span>
          <div className="text-white gap-4 flex">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-linkedin-in text-xl cursor-pointer ease-in duration-200 "></i>
          </div> */}
        </div>
        <div className="flex flex-col gap-12 items-center lg:items-start relative lg:ml-[36rem]">
        <p className="text-white z-10  text-lg align-middle text-center justify-center lg:ml-11 font-bold lg:text-2xl">
          WAKE UP IT'S TIME TO
          </p>
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={270}
            height={270}
            className="absolute left-5.5 lg:left-0 -top-8.5 pt-16"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-black z-10 font-semibold text-lg text-center  pl-2 lg:ml-11">
          TAKE THE ACTION
          </p>  
          <h1 className="font-bold text-[1.5rem] lg:text-4xl flex flex-col text-center lg:text-left leading-snug lg:space-y-2 lg:ml-10">
            <span>Professional Freelance <br/>Personnel Trainer <br/></span>{" "}
          </h1>
          {/* <Link
            href="/"
            className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
          >
            <span>OUR CLASSSES</span>
            <span className="text-[#FF0336]">
              <i className="fa-solid fa-arrow-right undefined"></i>
            </span>
          </Link> */}
        </div>
        </div>
    </section>
  );
}
export default Hero;
