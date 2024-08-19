import React from "react";
import "../../app/globals.css";

function HeaderInfo() {
  return (
    <div className="info-section text-white py-2" style={{ backgroundColor: '#555' }}>
      <div className="container d-flex justify-content-between  flex-md-row">
        <div className="text-uppercase text-center mt-2 mt-md-0">Request a Quote</div>
        <div className="text-uppercase text-center mt-2 mt-md-0">Visit Our Showroom</div>
        <div className="text-uppercase text-center mt-2 mt-md-0">What's in Stock</div>
      </div>
    </div>
  );
}

export default HeaderInfo;
