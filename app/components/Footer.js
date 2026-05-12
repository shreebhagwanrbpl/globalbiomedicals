"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {

  const pathname = usePathname();
  const [contactInfo, setContactInfo] = useState([]);

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const reservedRoutes = [
    "about",
    "contact",
    "items",
    "products",
    "services",
  ];

  // district slug
const district =
  pathParts[0] &&
  !reservedRoutes.includes(pathParts[0])
    ? pathParts[0]
    : null;

  // format city
  const formatCity = (name = "") =>
    name
      .split("-")
      .map(
        (w) =>
          w.charAt(0).toUpperCase() + w.slice(1)
      )
      .join(" ");

  const citySlug = district;

  const city = citySlug
  ? formatCity(citySlug)
  : "";

  // dynamic links
  const makeLink = (path = "") => {

    if (!path) {
      return `/${citySlug}`;
    }

    return `/${citySlug}${path}`;
  };


  const getValue = (key) => {

  return (
    contactInfo.find((x) => {

      const label =
        x.label?.toLowerCase();

      return (
        label?.includes(key) ||
        (key === "address" &&
          label?.includes("location"))
      );

    })?.value || "-"
  );

};


useEffect(() => {

  const fetchContact = async () => {

    try {

      const res = await fetch("/contact.json");

      const data = await res.json();

      setContactInfo(data || []);

    } catch (err) {
      console.log(err);
    }

  };

  fetchContact();

}, []);

  return (
    <footer className="footer">

      <div className="container-fluid px-5 py-5">

        <div className="row gy-4">

          {/* COMPANY INFO */}
          <div className="col-lg-4">

            <h4 className="fw-bold text-white">
              Raj Biosis
            </h4>

            <p className="small">
              Trusted partner for diagnostic instruments,
              reagents, and medical consumables across India.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2">

            <h6 className="footer-title">
              Quick Links
            </h6>

            <ul className="footer-links">

              <li>
                <Link href={makeLink("")}>
                  Home
                </Link>
              </li>

              <li>
                <Link href={makeLink("/items")}>
                  Products
                </Link>
              </li>

              <li>
                <Link href={makeLink("/services")}>
                  Services
                </Link>
              </li>

              <li>
                <Link href={makeLink("/about")}>
                  About
                </Link>
              </li>

              <li>
                <Link href={makeLink("/contact")}>
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div className="col-lg-3">

            <h6 className="footer-title">
              Our Services
            </h6>

            <ul className="footer-links">

              <li>Diagnostic Equipment</li>

              <li>Medical Consumables</li>

              <li>Lab Solutions</li>

              <li>Support & Maintenance</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="col-lg-3">

            <h6 className="footer-title">
              Contact
            </h6>

         <p className="small mb-2">
            <i className="bi bi-geo-alt"></i>
            {
              !district
                ? " F-4, 1st Floor, Plot No. 16, D-Block Tagor Nagar, on Ajmer-Delhi, 200 Feet Bypass Rd, Jaipur, Rajasthan 302021"
                : ` ${city}, India`
            }
          </p>

          {/* MAP */}
          <iframe
            src={`https://maps.google.com/maps?q=${
              !district
                ? "Raj Biosis Jaipur Rajasthan"
                : `${city}, India`
            }&output=embed`}
            width="100%"
            height="180"
            loading="lazy"
            style={{
              border: 0,
              borderRadius: "10px",
              marginTop: "10px"
            }}
          ></iframe>

            <p className="small mb-1">
              <i className="bi bi-envelope"></i>
              info@rajbiosis.com
            </p>

            <p className="small">
              <i className="bi bi-telephone"></i>
              +91 XXXXX XXXXX
            </p>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom mt-4 pt-3 text-center">

          <p className="mb-0 small">
            © {new Date().getFullYear()}
            {" "}
            Raj Biosis Pvt Ltd |
            All Rights Reserved
          </p>

        </div>

      </div>

      <style jsx>{`
        .footer {
          background: #111;
          color: #fff;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 12px;
          position: relative;
        }

        .footer-title::after {
          content: "";
          width: 40px;
          height: 2px;
          background: #198754;
          display: block;
          margin-top: 6px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #fff !important;
          text-decoration: none;
          font-size: 14px;
          transition: 0.3s;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #198754 !important;
          transform: translateX(6px);
        }

        .footer-links a::before {
          content: "›";
          margin-right: 6px;
          color: #198754;
          transition: 0.3s;
        }

        .footer-links a:hover::before {
          margin-right: 10px;
        }

        .footer-bottom {
          border-top: 1px solid #333;
        }

        i {
          margin-right: 6px;
          color: #198754;
        }

      `}</style>

    </footer>
  );
}

