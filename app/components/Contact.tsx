'use client';

import Link from "next/link";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    comment: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send('service_9i8quf8', 'template_58k40aj', formData, 'FoC7axTzHmgeDPznK')
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', service: '', comment: '' });
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact">
      <div className="py-16 lg:py-24 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16 lg:gap-0 max-w-screen-xl m-auto">
          <div className="space-y-8 mx-8">
            <h2 className="text-black text-[2rem] font-bold leading-[1.2]">
              We are here for help you! To Shape Your Body.
            </h2>
            <p>
              At Vishnu Fitness, I'll work with you one-on-one to tailor a plan that aligns with your goals and helps you achieve peak health and performance. 
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col relative space-y-6">
                <h3 className="text-xl font-bold">Place Of Work</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute top-2"></span>
                <p>
                  Personal Training <br/>All over Dubai
                </p>
              </div>
              <div className="flex flex-col relative space-y-6">
                <h3 className="text-xl font-bold">Training Hours</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute top-2"></span>
                <p>
                  Training at Flexible Hours
                </p>
              </div>
              <div className="flex flex-col relative space-y-6">
                <h3 className="text-xl font-bold">Information</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute top-2"></span>
                <p>
                  +971-55-344-8198
                  <br /> Vg7vishnu@@gmail.com
                </p>
              </div>
              <div className="flex flex-col relative space-y-8">
                <h3 className="text-xl font-bold">Follow Us On</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute"></span>
                <div className="flex items-center gap-4 lg:gap-3">
                  <Link
                    href="https://www.facebook.com/share/a3d2rqGogJ7n4ieH/?mibextid=LQQJ4d"
                    className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
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
                 {/* <Link
                    href="https://www.youtube.com"
                    className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </Link>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 mx-8 p-8 bg-[#f8f8f8] relative">
            <h3 className="text-2xl font-bold">Leave Us Your Info</h3>
            <span className="bg-[#ff0336] w-16 h-1 absolute top-[4.5rem]"></span>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 px-5 h-[3.125rem] text-[0.875rem] border border-[#e4e4e4]"
                placeholder="Full Name *"
                type="text"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-5 h-[3.125rem] text-[0.875rem] border border-[#e4e4e4]"
                placeholder="Email Address *"
                type="email"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full py-3 px-5 h-[3.125rem] text-[#a1a1a1] text-[0.875rem] border border-[#e4e4e4]"
                required
              >
                <option value="">Select Service</option>
                <option value="Body Building">Body Building</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Fat Loss">Fat Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="Powerlifting">Powerlifting</option>
                <option value="Crossfit">Crossfit</option>
              </select>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Comment"
                className="w-full py-3 px-5 h-[8rem] text-[0.875rem] border border-[#e4e4e4]"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-[#ff0336] w-fit py-4 px-8 font-bold text-[0.875rem] uppercase self-center"
              >
                submit now
              </button>
            </form>
            {status && <p className="text-center text-lg font-semibold">{status}</p>}
          </div>
        </div>
       {/* <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
            allowFullScreen={false}
            loading="lazy"
            title="map"
            className="w-full h-[30rem] border-0"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
