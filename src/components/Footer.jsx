import React from 'react';

const Footer = () => {
  return (
    <footer className="position-relative bg-dark text-light pt-5 pb-3">
      {/* Background Title */}
      <div className="footer-bg-text text-center w-100">
        <span>Craft your</span>
        <span>tales!</span>
      </div>

      {/* Footer Content */}
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row justify-content-between align-items-start">
          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Subscribe to the KidZworld Newsletter</h5>
            <p className="small">
              Latest news, insights, announcements and updates sent to your inbox.
            </p>
            <button className="btn btn-success px-4 rounded-pill">SUBSCRIBE</button>
          </div>

          {/* Products */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold">Products</h6>
            <ul className="list-unstyled small">
              <li>Story Creator</li>
              <li>Adventure Builder</li>
              <li>Character Studio</li>
              <li>Plot Generator</li>
              <li>Audio Companion</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold">Company</h6>
            <ul className="list-unstyled small">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold">Resources</h6>
            <ul className="list-unstyled small">
              <li>Help Center</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold">Social</h6>
            <ul className="list-unstyled small">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
