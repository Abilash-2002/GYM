import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import AboutSidebar from "../components/AboutSidebar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Banner page="Clients and Gallery" />
      <Gallery />
      <Footer />
    </main>
  );
}

export default page;
