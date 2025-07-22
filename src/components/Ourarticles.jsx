import React, { useRef } from 'react';

const articles = [
  {
    title: '10 Exciting Ways to make Summer Holidays Awesome',
    image: 'https://images.unsplash.com/photo-1614948229442-74e63a468d62?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur...',
    btnColor: 'danger'
  },
  {
    title: 'Embracing Education: The shift from Traditional Learning Methods for Children',
    image: 'https://plus.unsplash.com/premium_photo-1684795780124-1bef9f5f398b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Approaches and new digital games are evolving the way kids learn and play...',
    btnColor: 'warning'
  },
  {
    title: '7 Healthy Habits to Teach Your Kids in 2024',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Better food choices and hygiene routines can lead to a much better future...',
    btnColor: 'danger'
  },
  {
    title: 'Know the Difference Between Technical & Practical Toys',
    image: 'https://plus.unsplash.com/premium_photo-1661558951515-47f7706fd9c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Toys designed for real-life logic vs. creativity – how to balance them in child growth...',
    btnColor: 'warning'
  },
  {
    title: 'DIY Science Experiments for Rainy Days',
    image: 'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Keep kids engaged indoors with fun and safe science activities using household items...',
    btnColor: 'danger'
  },
  {
    title: 'Top 5 STEAM Books Every Kid Should Read',
    image: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Introduce young minds to critical thinking and innovation through engaging stories...',
    btnColor: 'warning'
  },
  {
    title: 'Creative Building Games That Boost Imagination',
    image: 'https://images.unsplash.com/photo-1644984875413-7f65e3671564?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Explore fun ways to improve your child’s imagination with block and puzzle-based games...',
    btnColor: 'danger'
  },
];

const OurArticles = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="our-articles-section py-5 text-center">
      <div className="container">
        <h2 className="section-title">OUR PRODUCTS</h2>
        <p className="section-subtitle">Find out what's happening in the world of STEAM play</p>

        <div className="d-flex justify-content-between align-items-center mt-4 position-relative">
          {/* Left Arrow */}
          <button className="nav-btn rounded-pill" onClick={() => scroll('left')}>
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Scrollable Cards */}
          <div
            className="d-flex flex-nowrap overflow-auto article-carousel px-3"
            ref={carouselRef}
          >
            {articles.map((item, index) => (
              <div
                key={index}
                className="card m-2 p-2 text-start"
                style={{
                  minWidth: '250px',
                  maxWidth: '250px',
                  borderRadius: '20px',
                  backgroundColor: '#b92b2b'
                }}
              >
                <img src={item.image} className="card-img-top rounded" alt={item.title} />
                <div className="card-body">
                  <h6 className="card-title fw-bold text-white">{item.title}</h6>
                  <p className="card-text text-light" style={{ fontSize: '0.8rem' }}>{item.description}</p>
                  <button className={`btn btn-${item.btnColor} btn-sm`}>Read More</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="btn rounded-pill" onClick={() => scroll('right')}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <button className="btn btn-success mt-4 px-4 rounded-pill">VIEW MORE</button>
      </div>
    </section>
  );
};

export default OurArticles;
