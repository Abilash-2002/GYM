import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[url('/images/whychooseus/black-bg.jpg')] bg-[50%] bg-cover"
    >
      <div className="bg-[#ff0336] lg:bg-[url('/images/whychooseus/red-bg.png')] bg-[50%] bg-cover bg-no-repeat lg:h-[16rem] py-8 px-12 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left lg:gap-32">
        <h1 className="text-white font-bold text-2xl lg:text-4xl lg:w-[42rem] lg:leading-snug">
          Always Providing Best Fitness Service For You
        </h1>
        <Link
          href="/contact"
          className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
        >
          <span>JOIN WITH ME</span>
          <span className="text-[#FF0336]">
            <i className="fa-solid fa-arrow-right undefined"></i>
          </span>
        </Link>
      </div>
      <div className="text-white px-8 pt-32 lg:grid lg:grid-cols-2 lg:gap-32 max-w-screen-xl m-auto">
        <div className="relative">
            <Image
            src="/images/whychooseus/main.jpg"
            alt="why choose us"
            width={1000}
            height={1000}
            className="m-auto w-60 lg:w-[32rem] h-[90%] rounded-lg "
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 py-16 relative">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={250}
            height={250}
            className="relative align-middle justify-center -top-1.5"
          />
          <h3 className="absolute font-bold z-10 lg:translate-x-14">WHY CHOOSE ME</h3>
          <h1 className="font-bold text-4xl">
            I Can Provide A Shape Of Your Body Here!
          </h1>
          <p className="text-[#b4b4b4]">
          At <strong>Vishnu Personal Training</strong>, I’m Dedicated To Help You Achieve The Body Of Your Dreams. I’ll work with you to create a personalized fitness and nutrition plan tailored to your specific goals.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-12 lg:px-0">
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-1.png"
                alt="Free Fitness Training"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Professional Fitness Training</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-2.png"
                alt="Modern Gym Equipments"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Expertise In Gym Equipments</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-3.png"
                alt="Gym Bag Equipments"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Accessories Advisory</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-4.png"
                alt="Fresh Bottle Watter"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Nutritious Diet Plans</h1>
            </div>
          </div>
          {/* <div>
            <Link
              href="/"
              className="relative text-white flex items-center gap-2 bg-[#595959] hover:bg-[#ff0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12.5rem] after:duration-300 after:ease-linear after:border after:border-[rgb(89,89,89)] hover:after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 my-8"
            >
              <span>OUR CLASSES</span>
              <span>
                <i className="fa-solid fa-arrow-right undefined"></i>
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
