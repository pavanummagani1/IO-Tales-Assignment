import React from 'react';

function FaqSection() {
  const faqItems = [
    {
      question: "How do I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. Use it on our website or the courier's platform for real-time updates."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Visit our Returns page to initiate the process."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to over 50 countries. Shipping costs and delivery times vary by destination and will be calculated at checkout."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our team is available 24/7 via live chat, email (support@example.com), or phone (+1-555-123-4567)."
    },
    {
      question: "Are my payments secure?",
      answer: "Absolutely. We use SSL encryption and partner with trusted payment gateways like Stripe and PayPal to ensure your data is protected."
    }
  ];

  return (
    <section className="faq-section position-relative text-white py-5">
      <div className="container text-center">
        <h2 className="faq-heading mb-2">Frequently Asked Questions</h2>
        <p className="faq-subheading mb-4">
          Can’t find what you’re looking for? We’ve got answers to common queries below.
        </p>

        <div className="accordion custom-accordion mx-auto" id="faqAccordion">
          {faqItems.map((item, i) => (
            <div className="accordion-item mb-3" key={i}>
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded={i === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${i}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${i}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-more-btn btn btn-pink mt-4 px-4 py-2 rounded-pill">
          VIEW MORE FAQs
        </button>
      </div>
    </section>
  );
}

export default FaqSection;