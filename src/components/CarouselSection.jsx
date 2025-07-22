import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const productImages = [
  "https://plus.unsplash.com/premium_photo-1661634051523-f90bd972945a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661611044272-b43f9a005984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/free-vector/four-happy-kids-with-backpacks-green-hill_9975-108628.jpg?semt=ais_hybrid&w=740",
  "https://www.shutterstock.com/image-vector/three-school-kid-happily-going-260nw-2494419421.jpg",
  "https://img.lovepik.com/free-png/20210926/lovepik-cartoon-schoolboy-going-to-school-png-image_401477248_wh1200.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4EA9JapEfGBdQFKGXl4V1Rr9yfnx_rtWP0VX7CtuDPH9leCn8sSh_Rf0YZmSw98JpBc&usqp=CAU",
  "https://thumbs.dreamstime.com/b/kids-exploring-nature-magnifying-glass-insects-326840132.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzr1Rc9oEFduRvaSBbC_Z60RtbZhd8zh0jKtnx1PM6iZuwT-t_S2JwI3r5q228ytS4FG0&usqp=CAU",
  "https://thefunalways.com/uploads/ccc.jpg",
];

const CarouselCard = ({ title, image, borderClass }) => (
  <div className={`carousel-card ${borderClass}`}>
    <div className="card-image-container position-relative">
      <img src={image} alt={title} className="product-image w-100 rounded" />
      <div className="play-icon position-absolute top-0 start-0 m-2 bg-danger rounded-circle p-1">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#fff" stroke="#000" strokeWidth="2" />
          <polygon points="10,8 16,12 10,16" fill="#000" />
        </svg>
      </div>
    </div>
    <div className="card-details text-center">
      <h5 className="card-title mt-2">{title}</h5>
      <p className="price">₹ 1499.00</p>
      <button className="btn btn-success btn-sm">SHOP NOW</button>
    </div>
  </div>
);

const CarouselSection = () => {
  return (
    <section className="carousel-section position-relative py-5 text-white overflow-hidden">
      {/* Top Cloud SVG */}
      <div className="cloud-top">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-100">
          <path
            fill="#c52094"
            d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,149.3C672,128,768,96,864,117.3C960,139,1056,213,1152,234.7C1248,256,1344,224,1392,208L1440,192L1440,0H0Z"
          ></path>
        </svg>
      </div>

      {/* Decorative Icons */}
      <div className="decor-icon music-note">
        <i className="bi bi-music-note-beamed"></i>
      </div>
      <div className="decor-icon sparkle">*</div>

      <div className="container text-center position-relative z-1">
        {/* Rainbow and Heading */}
        <div className="rainbow-icon mx-auto mb-3">
          <svg viewBox="0 0 100 60" width="60" height="60">
            <defs>
              <linearGradient id="rainbow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="20%" stopColor="#ff9900" />
                <stop offset="40%" stopColor="#ffff00" />
                <stop offset="60%" stopColor="#33cc33" />
                <stop offset="80%" stopColor="#3399ff" />
                <stop offset="100%" stopColor="#9900cc" />
              </linearGradient>
            </defs>
            <path d="M10 50 A40 40 0 0 1 90 50" stroke="url(#rainbow)" strokeWidth="10" fill="none" />
          </svg>
        </div>

        <h2 className="carousel-heading fw-bold display-5">Craft your Tales</h2>
        <p className="carousel-sub mb-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Adipiscing id est interdum nulla condimentum fermentum. Scelerisque
          suspendisse gravida cras sit tincidunt vulputate. Lobortis venenatis est sed rhoncus pharetra et.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          className="custom-swiper"
        >
          {productImages.map((img, i) => (
            <SwiperSlide key={i}>
              <CarouselCard
                title={`Product ${i + 1}`}
                image={img}
                borderClass={i % 2 === 0 ? "border-yellow" : "border-blue"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View More Button */}
        <div className="mt-4">
          <button className="btn btn-danger btn-lg px-4">VIEW MORE</button>
        </div>
      </div>

      {/* Bottom Cloud Image */}
      <div className="cloud-bottom">
        <img src="/Vector.png" alt="Cloud Bottom" className="w-100" />
      </div>
    </section>
  );
};

export default CarouselSection;
