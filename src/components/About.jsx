import React from 'react';

function AboutSection() {
  return (
    <section className="about-section position-relative overflow-hidden">
      {/* Top Cloud */}
      <div className="cloud-layer top-cloud"></div>

      <div className="container text-center position-relative z-1">
        <h2 className="section-tag">ABOUT</h2>
        <h1 className="section-title">KidZworld</h1>
        <p className="section-sub">Small team, big tales, endless play.</p>

        {/* About box with stroke line */}
        <div className="about-decor-wrapper d-flex justify-content-center mx-auto position-relative">
          <div className="about-box position-relative z-3 rounded p-4 shadow bg-white text-dark">
            <p>
              Storytelling is a timeless art that connects people across generations. From bedtime tales to epic
              adventures, each story leaves a lasting impression on the listener. Through characters and imagination,
              we unlock the magic of possibility and wonder.
            </p>
            <p>
              Our collection is designed to spark creativity and engagement for children and families alike. Whether
              you're crafting a new world or exploring an old legend, these tales inspire curiosity, build confidence,
              and nurture emotional growth through playful learning.
            </p>
          </div>

          <svg
            className="about-curve position-absolute top-50 start-0 translate-middle-y w-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,75 C150,0 350,150 500,75"
              stroke="#ffe75d"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Cloud */}
      <div className="cloud-layer bottom-cloud"></div>
    </section>
  );
}

export default AboutSection;
