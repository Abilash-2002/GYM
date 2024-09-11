import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section id="footer">
      <footer className="bg-white px-8 py-16 lg:py-24 text-center flex flex-col lg:flex-row lg:text-left gap-16 lg:justify-between lg:px-32">
        <div className="space-y-6 lg:w-96">
          <div className="space-y-4">
            {/* <div>
              <Image
                src="/images/logo/logo-black.svg"
                alt="logo"
                width={160}
                height={160}
                className="m-auto lg:m-0"
              />
            </div> */}
            <h1 className="font-serif text-2xl"> VISHNU FITNESS</h1>
            <p className="text-[0.9rem]">
            Take your fitness journey to the next level with my personalized training program. Let's transform your body and elevate your fitness together!
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <Link
              href="https://www.facebook.com/share/a3d2rqGogJ7n4ieH/?mibextid=LQQJ4d"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            {/*<Link
              href="https://www.twitter.com"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>*/}
            <Link
              href="https://www.instagram.com/vis_hnu_gopal?igsh=OWlpeHM2bWVldTF6&utm_source=qr"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>            
            {/* <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-pinterest-p"></i>
            </Link> */}
            {/*<Link
              href="https://www.youtube.com"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>*/} 
          </div>
          <div>
            <p>Privacy Policy | © {new Date().getFullYear()} Vishnu Fitness</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold text-2xl">Site Map</h1>
              <span className="top-8 left-[40%] lg:left-0 absolute w-28 h-[4px] bg-[#ff0366]"></span>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-baseline">
              <Link href="/about" className="hover:text-[#ff0336] hover:font-bold">
                About
              </Link>
              <Link href="/gallery" className="hover:text-[#ff0336] hover:font-bold">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-[#ff0336] hover:font-bold">
                Contact
              </Link>
              {/* <Link href="/" className="hover:text-[#ff0336] hover:font-bold">
                Learn Machines
              </Link>
              <Link href="/" className="hover:text-[#ff0336] hover:font-bold">
                Full-body Strength
              </Link> */}
            </div>
          </div>
          <div className="space-y-6">
          <div className="relative">
              <h1 className="font-bold text-2xl">Working Hours</h1>
              <span className="top-8 left-[30%] lg:left-0 absolute w-48 h-[4px] bg-[#ff0366]"></span>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Everyday :</span> Flexible Timings
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
