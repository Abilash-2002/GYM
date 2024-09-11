import Image from "next/image";
import React from "react";

function FeaturedClass() {
  return (
    <section id="featured-class">
      <div className="px-8 py-16 flex flex-col gap-8 max-w-screen-xl m-auto lg:px-0 lg:py-24">
        <div className="relative">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={270}
            height={270}
            className="absolute left-[1.65rem] lg:left-[39.25%] -top-2.5"
          />
          <p className="text-white relative z-10 font-bold text-center">
            FEATURED CLASSES
          </p>
        </div>
        <h1 className="font-bold text-4xl text-center">
          I am Offering Best Flexible Classes
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 lg:mt-4">
          <div className="group h-[20rem] lg:col-span-2 flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] group-hover:bg-white rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:content-[url('/images/featured-class/cycling/icon-white.png')] after:absolute after:scale-[.7] after:inset-x-1/2 group-hover:after:content-[url('/images/featured-class/cycling/icon-red.png')]"></div>
            <div className="absolute inset-0 bg-[url('/images/featured-class/cycling/bg.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Weight Loss</h1>
              <p className="bg-[#ff0336] px-4 py-1">
Flexible Timings         </p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] group-hover:bg-white rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:content-[url('/images/featured-class/karate/icon-white.png')] after:absolute after:scale-[.7] after:inset-x-1/2 group-hover:after:content-[url('/images/featured-class/karate/icon-red.png')]"></div>
            <div className="absolute inset-0 bg-[url('/images/featured-class/karate/bg.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Body Building</h1>
              <p className="bg-[#ff0336] px-4 py-1">Flexible Timings</p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] group-hover:bg-white rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:content-[url('/images/featured-class/power/icon-white.png')] after:absolute after:scale-[.7] after:inset-x-1/2 group-hover:after:content-[url('/images/featured-class/power/icon-red.png')]"></div>
            <div className="absolute inset-0 bg-[url('/images/featured-class/power/bg1.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Powerlifting</h1>
              <p className="bg-[#ff0336] px-4 py-1">Flexible Timings</p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] group-hover:bg-white rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:content-[url('/images/featured-class/meditation/icon-white.png')] after:absolute after:scale-[.7] after:inset-x-1/2 group-hover:after:content-[url('/images/featured-class/meditation/icon-red.png')]"></div>
            <div className="absolute inset-0 bg-[url('/images/featured-class/meditation/bg.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Weight Gain</h1>
              <p className="bg-[#ff0336] px-4 py-1">Flexible Timings</p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] group-hover:bg-white rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:content-[url('/images/featured-class/martial-arts/icon-white.png')] after:absolute after:scale-[.7] after:inset-x-1/2 group-hover:after:content-[url('/images/featured-class/martial-arts/icon-red.png')]"></div>
            <div className="absolute inset-0 bg-[url('/images/featured-class/martial-arts/bg.jpg')] bg-cover bg-[100%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">CrossFit</h1>
              <p className="bg-[#ff0336] px-4 py-1">Flexible Timings</p>
            </div>
          </div>
          <div className="group h-[20rem] lg:col-span-2 flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] group-hover:bg-white rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:content-[url('/images/featured-class/workout/icon-white.png')] after:absolute after:scale-[.7] after:inset-x-1/2 group-hover:after:content-[url('/images/featured-class/workout/icon-red.png')]"></div>
            <div className="absolute inset-0 bg-[url('/images/featured-class/workout/bg.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Fat Loss</h1>
              <p className="bg-[#ff0336] px-4 py-1">Flexible Timings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedClass;
