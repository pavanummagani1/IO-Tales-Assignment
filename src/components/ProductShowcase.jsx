import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaHeart, FaArrowRight } from 'react-icons/fa';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      image: '/kids1.jpg',
      price: '₹999',
      desc: 'Shadow Box Adventure Set',
    },
    {
      id: 2,
      image: '/kids2.jpg',
      price: '₹799',
      desc: 'Magic Learning Puzzle Kit',
    },
    {
      id: 3,
      image: '/kids1.jpg',
      price: '₹1299',
      desc: 'Creative DIY Craft Box',
    },
  ];

  return (
    <section className="product-showcase">
      <div className="title">
        <h2>FUN & LEARN COLLECTION</h2>
        <p>
          Explore the world of color and creativity. The brightest and boldest designs ever
          created for kids! Pick the one that excites your child the most.
        </p>
        <div className="underline" />
      </div>

      <div className="menu-buttons">
        {['Menu 01', 'Menu 02', 'Menu 03', 'Menu 04', 'Menu 05'].map((menu, index) => (
          <button className={`menu ${index === 0 ? 'active' : ''}`} key={index}>
            {menu}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="slide">
              <img src={product.image} alt="Product" className="product-image" />

              <div className="price-bubble">₹ {product.price}</div>

              <div className="heart-icon">
                <FaHeart />
              </div>

              <div className="price-label">
                <FaArrowRight /> Price Goes Here
              </div>

              <p className="desc">{product.desc}</p>

              <button className="shop-btn">SHOP NOW</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductShowcase;
