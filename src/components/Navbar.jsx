import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="custom-navbar position-relative">
      {/* Offer Banner */}
      <div className="offer-bar text-white py-1 text-center">
        <i className="bi bi-heart-fill me-2 text-danger"></i>
        5% Discount On Your First Purchase Code : FIRST BUYS
      </div>

      {/* Yellow Blob SVG */}
      <svg className="yellow-blob" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#f9e86f"
          d="M40,-40C60,-20,80,0,70,20C60,40,30,60,10,50C-10,40,-20,20,-30,0C-40,-20,-50,-40,-40,-40Z"
          transform="translate(100 60)"
        />
      </svg>

      {/* Header */}
      <div className="header d-flex justify-content-between align-items-center px-4 py-3 position-relative">
        <div className="logo fw-bold fs-3 position-relative z-2">KidZworld</div>

        {/* Desktop Menu */}
        <div className="menu-header d-none d-lg-flex gap-4 justify-content-center flex-grow-1">
          <span className="menu-item active rounded-pill px-3 py-1 border">MENU 01</span>
          <span className="menu-item">MENU 02</span>
          <span className="menu-item">MENU 03</span>
          <span className="menu-item">MENU 04</span>
          <span className="menu-item">MENU 05</span>
          <span className="menu-item">MENU 06</span>
        </div>

        {/* Icons */}
        <div className="icons d-flex gap-3 align-items-center">
          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-cart4 position-relative">
            <span className="cart-dot bg-danger"></span>
          </i>
          <i className="bi bi-list fs-2 d-lg-none" onClick={() => setMenuOpen(true)}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" ref={menuRef}>
          <div className="mobile-menu-content">
            <i className="bi bi-x-lg close-icon" onClick={() => setMenuOpen(false)}></i>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <span key={n} className="d-block py-2" onClick={() => setMenuOpen(false)}>
                MENU 0{n}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom White Wave SVG */}
      <svg className="bottom-wave" viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,21.3C1200,21,1320,11,1380,5.3L1440,0V50H1380C1320,50,1200,50,1080,50C960,50,840,50,720,50C600,50,480,50,360,50C240,50,120,50,60,50H0Z"
        />
      </svg>
    </div>
  );
};

export default Navbar;
