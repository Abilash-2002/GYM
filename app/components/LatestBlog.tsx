import Image from "next/image";
import Link from "next/link";
import React from "react";

function LatestBlog() {
  return (
    <section id="latest-blog">
      <div className="px-8 py-16 space-y-12">
        <div className="relative flex flex-col gap-4 items-center text-center">
        <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={200}
            height={200}
            className="absolute left-[3.75rem] lg:left-[39.25rem] -top-1.5"
          />
          <p className="text-white relative z-10 font-bold text-right mb-4 ">
            RECENT POSTS
          </p>
          <h1 className="font-bold text-4xl">Our Recent Posts</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-8 lg:gap-4 rounded-xl">
          <div className="bg-white shadow-xl flex flex-col gap-6 lg:justify-between rounded-xl">
            <div className="flex flex-col gap-6">
            <Image
                src="/images/whychooseus/grid-2.png"
                alt="Modern Gym Equipments"
                width={1000}
                height={1000}
                className="bg-[#2b2b2b] rounded-2xl"
              />
            </div>
          </div>
          <div className="bg-white shadow-xl flex flex-col gap-6 lg:justify-between rounded-xl">
            <div className="flex flex-col gap-6">
            <Image
                src="/images/whychooseus/grid-2.png"
                alt="Modern Gym Equipments"
                width={1000}
                height={1000}
                className="bg-[#2b2b2b] rounded-2xl"
              />
            </div>
            </div>
            <div className="bg-white shadow-xl flex flex-col gap-6 lg:justify-between rounded-xl">
            <div className="flex flex-col gap-6">
            <Image
                src="/images/whychooseus/grid-2.png"
                alt="Modern Gym Equipments"
                width={1000}
                height={1000}
                className="bg-[#2b2b2b] rounded-2xl"
              />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;
