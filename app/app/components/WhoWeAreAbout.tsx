import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhoWeAreAbout() {
  return (
    <section id="who-we-are-about">
      <div className="px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-32 max-w-screen-xl m-auto">
          <div className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            <Image
              src="/images/abstract/abstract.svg"
              alt="abstract"
              width={200}
              height={200}
              className="absolute left-[3.75rem] -top-1.5 lg:left-0"
            />
            <p className="text-white relative z-10 font-bold text-center lg:translate-x-10">
              ABOUT ME
            </p>
            <h1 className="font-bold text-4xl">
              I Will Give You Strength and Health
            </h1>
            <p>          At <strong>Vishnu Personal Training</strong>, I’m dedicated to helping you achieve the body of your dreams. I’ll work with you to create a personalized fitness and nutrition plan tailored to your specific goals.

            </p>
            <div>
              <Link
                href="/contact"
                className="relative text-white flex items-center gap-2 bg-[#ff0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12rem] after:duration-300 after:ease-linear after:border after:border-[#ff0336] hover:after:border-[#ff0336] after:-top-3 after:-right-4 hover:after:top-0 hover:after:right-0 mt-4"
              >
                <span>CONTACT US</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              width={1000}
              height={1000}
              src="/images/whoweare-about/about.jpg"
              alt="girl_running"
              className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5] rounded-xl"
            />
            {/* <Image
              width={250}
              height={250}
              src="/images/whoweare/half-circle.svg"
              alt="bg-red"
              className="absolute top-[55%] left-[9.5rem] translate-x-1/2 -translate-y-1/2"
            />
            <Image
              width={80}
              height={80}
              src="/images/whoweare/about.jpg"
              alt="bg-text"
              className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
            />
            <Image
              width={80}
              height={80}
              src="/images/whoweare/fart.png"
              alt="bg-wind"
              className="absolute right-[34%] top-[57.5%] translate-x-1/2 -translate-y-1/2"
            /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto">
          <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
            <Image
              src="/images/whoweare-about/grid-1.png"
              alt="history"
              width={100}
              height={100}
            />
            <h1 className="text-4xl font-bold">My Motive</h1>
            <p className="lg:px-20">
            With years of experience and a track record of exceptional results, I am dedicated to use my expertise to turn your fitness goals into reality.
            </p>
          </div>
          <Image
            src="/images/whoweare-about/gird-5.jpg"
            alt="who we are"
            width={1000}
            height={1000}
            className="w-full h-full lg:h-[28rem]"
          />
          <Image
            src="/images/whoweare-about/grid-6.jpg"
            alt="who we are"
            width={1000}
            height={1000}
            className="w-full h-full lg:h-[28rem]"
          />
          <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
            <Image
              src="/images/whoweare-about/grid-4.png"
              alt="history"
              width={100}
              height={100}
            />
            <h1 className="text-4xl font-bold">Services Offered</h1>
            <p className="lg:px-20">
            Body Building I Fat Loss Expert I Mass Gaining
Weight Loss I Functional Training I Strengthening I Diet Counseling
Hypertrophy Training I Core Training I Online Training
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreAbout;
