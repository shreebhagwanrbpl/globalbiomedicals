import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-6">
            <span className="badge bg-success mb-3 px-3 py-2">
              Trusted Since 2009
            </span>
            <h1 className="fw-bold display-4">
              Advanced <span className="text-success">Diagnostic</span> Solutions
            </h1>
            <p className="mt-3 text-light">
              Delivering high-quality medical equipment & consumables
              for hospitals, labs & healthcare professionals.
            </p>
            <div className="mt-4 d-flex gap-3">
              {/* <button className="btn btn-success px-4 py-2">
                Explore Services
              </button> */}
              <Link href="/services" className="btn btn-success px-4 py-2">
              Explore Services
            </Link>
                <Link href="/contact">
              <button className="btn btn-outline-light px-4 py-2">
                Contact Us
              </button>
            </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 text-center position-relative">
            <div className="hero-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
              className="img-fluid rounded-4 shadow-lg"
              alt="medical lab"
            />
          </div>
        </div>
      </div>
    </section>
  );
}