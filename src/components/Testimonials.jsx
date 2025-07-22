import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Mehta",
      text: "I've never experienced such quick and courteous service before. The platform is intuitive and exactly what I needed.",
      shape: "blue",
    },
    {
      name: "Riya Sharma",
      text: "Absolutely loved the smooth interface. This service truly understands user needs and delivers beyond expectations!",
      shape: "pink",
    },
    {
      name: "Kabir Verma",
      text: "Every step was seamless. The entire experience felt personal and professional at the same time.",
      shape: "green",
    },
    {
      name: "Sneha Kapoor",
      text: "Combines aesthetics, functionality, and support so well. Set a new standard for user experience!",
      shape: "purple",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="cloud-bg"></div>
      <div className="container text-center">
        <h2 className="section-title">WHAT OUR USERS SAY</h2>
        <p className="section-subtitle">
          Our users love us! Here’s what they’re saying about their experience.
        </p>

        <div className="testimonial-wrapper">
          <button className="nav-btn left">&#8592;</button>
          {testimonials.map((item, index) => (
            <div className={`testimonial-card ${item.shape}`} key={index}>
              <div className="icon">❤️</div>
              <h5>{item.name}</h5>
              <p>{item.text}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
          <button className="nav-btn right">&#8594;</button>
        </div>

        <button className="view-more-btn">VIEW MORE</button>
      </div>
    </section>
  );
};

export default Testimonials;