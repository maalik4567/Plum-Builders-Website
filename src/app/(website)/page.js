import React from "react";
import HeaderInfo from "@/components/headerInfo/HeaderInfo.jsx";
import Navbar from "@/components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import IntroSection from "@/components/bannerIntro/IntroSection.jsx";
import Journey from "@/components/journey/Journey";
import Shop from "@/components/shop/Shop"
import "../globals.css"
import Footer from "@/components/footer/Footer";

function page() {
  return (
    <div>
      <HeaderInfo className="mb-3" />
      <div className="main">
        <Navbar className="mb-5" /> {/* Add margin-bottom to create space */}
        <IntroSection className="mt-5"/> {/* Add margin-top to create space */}
        <Journey></Journey>
        <Shop></Shop>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default page;
