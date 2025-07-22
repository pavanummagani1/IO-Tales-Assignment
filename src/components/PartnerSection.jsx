import React from 'react';

const PartnerSection = () => {
  return (
    <section className="partner-section text-center py-5">
      <div className="container">
        <h2 className="section-title">TRUSTED PARTNERS</h2>
        <p className="section-desc mx-auto">
          We collaborate with leading brands to deliver exceptional experiences. 
          Our partners share our commitment to quality and innovation
        </p>
        <div className="separator mx-auto my-3"></div>

        <div className="bg-light rounded p-4 d-flex justify-content-around align-items-center flex-wrap logo-box mt-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="Amazon" className="partner-logo" />
          <img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/news/fi/firstcrycom-marks-a-century-003def9446.gif" alt="FirstCry" className="partner-logo" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCC3Tmb6J_W9dFGdI4d0144wa6KmMco-2zhQ&s" alt="Hamleys" className="partner-logo" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
