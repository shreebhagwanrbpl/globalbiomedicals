"use client";

export default function Services() {
  return (
    <div className="services-page">

      {/* 🔥 HERO */}
      <section className="services-hero text-center">
        <div className="container">
          <h1 className="fw-bold display-4">
            Our <span>Services</span>
          </h1>
          <p className="mt-3">
            Comprehensive medical and diagnostic solutions for modern healthcare
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES CARDS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-md-4" data-aos="fade-up">
              <div className="service-card">
                <i className="bi bi-heart-pulse-fill"></i>
                <h5>Diagnostic Equipment</h5>
                <p>
                  Advanced lab machines & analyzers for accurate diagnosis.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card">
                <i className="bi bi-capsule"></i>
                <h5>Medical Consumables</h5>
                <p>
                  High-quality reagents, kits & consumables for laboratories.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <i className="bi bi-tools"></i>
                <h5>Support & Maintenance</h5>
                <p>
                  Reliable after-sales service and equipment maintenance.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-md-4" data-aos="fade-up">
              <div className="service-card">
                <i className="bi bi-truck"></i>
                <h5>Pan India Delivery</h5>
                <p>
                  Fast and secure delivery across hospitals and labs in India.
                </p>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card">
                <i className="bi bi-shield-check"></i>
                <h5>Quality Assurance</h5>
                <p>
                  Certified products ensuring accuracy, safety & reliability.
                </p>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <i className="bi bi-person-check"></i>
                <h5>Expert Consultation</h5>
                <p>
                  Guidance from experienced professionals for best solutions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="cta text-center">
        <div className="container">
          <h2>Need Medical Solutions?</h2>
          <p>Contact us today for best diagnostic equipment</p>
          <button className="btn btn-light px-4 mt-2">
            Get in Touch
          </button>
        </div>
      </section>

      {/* 🔥 STYLES */}
      <style jsx>{`
        .services-page {
          background: #f8fdfb;
        }

        /* HERO */
        .services-hero {
          padding: 100px 0;
          background: linear-gradient(135deg, #eefaf3, #f8fdfb);
        }

        .services-hero span {
          color: #198754;
        }

        .services-hero p {
          color: #666;
        }

        /* CARD */
        .service-card {
          background: #fff;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          transition: 0.4s;
          border: 1px solid #eee;
        }

        .service-card i {
          font-size: 40px;
          color: #198754;
          margin-bottom: 15px;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }

        .service-card p {
          color: #666;
        }

        /* CTA */
        .cta {
          background: #0f5132;
          color: white;
          padding: 70px 0;
        }

        .cta h2 {
          font-weight: bold;
        }

        .cta button {
          border-radius: 8px;
        }
      `}</style>

    </div>
  );
}