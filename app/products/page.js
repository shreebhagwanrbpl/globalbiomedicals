"use client";
import { useState } from "react";
import Link from "next/link";
export default function Products() {

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = () => {
  if (!form.email || !form.phone) {
    return alert("Please fill all details");
  }

  console.log(form); // yaha API laga dena
  alert("Quote Request Sent ✅");
  setShowForm(false);
};

  const products = [
    {
      name: "Albumin BCG Kit",
      category: "Reagents",
      img: "/abk.png",
      desc: "High quality diagnostic reagent for lab use",
         specs: {   // ✅ add kar
      Type: "Reagent",
      Volume: "100ml",
      Method: "BCG",
      Usage: "Lab Testing"
    }
    },
    {
      name: "Glucose Test Kit",
      category: "Kits",
      img: "/gtk.png",
      desc: "Accurate glucose testing solution",
    },
    {
      name: "Blood Collection Tubes",
      category: "Consumables",
      img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      desc: "Sterile and safe collection tubes",
    },
    {
      name: "Hematology Analyzer",
      category: "Machines",
      img: "/HA.png",
      desc: "Advanced lab machine for blood analysis",
    },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* 🔥 HEADER */}
      <div className="container-fluid px-5 py-5 text-center">
      <h1 className="fw-bold display-4 gradient-text">Our Products</h1>
        <p className="text-muted">Explore our wide range of diagnostic products</p>

        {/* SEARCH */}
        <div className="search-box mt-4">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 🔥 PRODUCTS GRID */}
      <div className="container-fluid px-5 pb-5">
        <div className="row g-4">
          {filtered.map((item, i) => (
        <div className="col-md-3" key={i}>
          <div className="product-card">

            <img src={item.img} className="product-img-top" />
            <div className="p-3">
              <span className="badge bg-success mb-2">
                {item.category}
              </span>
              <h5>{item.name}</h5>
              <p className="text-muted small">{item.desc}</p>
                <button 
                  className="btn btn-success w-100"
                  onClick={() => setSelectedProduct(item)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>

    {selectedProduct && (
      <div className="custom-modal">

        <div className="modal-box">

          {/* CLOSE */}
          <span 
            className="close" 
            onClick={() => {
              setSelectedProduct(null);
              setShowForm(false);
            }}
          >
            ×
          </span>

          <div className="row align-items-center">

            {/* IMAGE */}
            <div className="col-md-6 text-center">
              <div className="img-wrapper">
                <img src={selectedProduct.img} />
              </div>
            </div>

            {/* DETAILS */}
            <div className="col-md-6">

              <h3 className="fw-bold">{selectedProduct.name}</h3>
              <p className="text-muted">{selectedProduct.desc}</p>

              <span className="badge bg-success mb-3">
                {selectedProduct.category}
              </span>

              {/* SPECIFICATIONS */}
              <div className="spec-box">
                <h6>Specifications</h6>

                <div className="spec-grid">
                  {Object.entries(selectedProduct.specs || {}).map(([k, v]) => (
                    <div key={k} className="spec-item">
                      <span>{k}</span>
                      <strong>{v}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* 🔥 BUTTON / FORM */}
              <div className="mt-4">

              {!showForm ? (
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-success w-100"
                  onClick={() => setShowForm(true)}
                >
                  Get Quote
                </button>

                <Link href="/contact">
                  <button className="btn btn-outline-dark w-100">
                    Enquiry
                  </button>
                </Link>

              </div>
            ) : (
              <div className="quote-box mt-3">

                {/* 🔙 BACK BUTTON */}
                <div 
                  className="back-btn"
                  onClick={() => setShowForm(false)}
                >
                  ← Back to Details
                </div>

                <p className="fw-semibold mb-3">
                  Get Instant Quote
                </p>

                <div className="d-flex flex-column gap-2">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                  />

                  <button 
                    className="btn btn-success mt-2"
                    onClick={handleSubmit}
                  >
                    Submit Request
                  </button>

                </div>

              </div>
            )}

              </div>

            </div>

          </div>

        </div>

      </div>
    )}



<style jsx>{`
  .products-page {
    background: linear-gradient(135deg, #f8fdfb, #eefaf3);
  }

  /* HEADER TEXT */
  .gradient-text {
    background: linear-gradient(90deg, #198754, #0f5132);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* SEARCH */
  .search-box input {
    width: 320px;
    padding: 12px;
    border-radius: 40px;
    border: 1px solid #ddd;
    outline: none;
    transition: 0.3s;
  }

  .search-box input:focus {
    border-color: #198754;
    box-shadow: 0 0 10px rgba(25,135,84,0.2);
  }

  /* CARD */
  .product-card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.4s;
    border: 1px solid #eee;
    position: relative;
     padding-bottom: 10px;
  }
     .product-card h5 {
  font-size: 18px;
  margin-bottom: 5px;
}

  .product-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0,0,0,0.12);
  }

  /* IMAGE */
  .product-img {
    overflow: hidden;
  }
.product-img-top {
  width: 100%;
  height: 260px;  
  object-fit: contain;
   padding: 15px;
  background: #f8fdfb;
}
  .product-img img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    transition: 0.5s;
  }

  .product-card:hover img {
    transform: scale(1.1);
  }

  /* BODY */
  .product-body {
    padding: 18px;
  }

  .product-body h5 {
    font-weight: 600;
  }

  /* BADGE */
  .custom-badge {
    background: #e9f7ef;
    color: #198754;
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 12px;
  }

  /* BUTTON */
  .custom-btn {
    background: linear-gradient(135deg, #198754, #146c43);
    color: white;
    border-radius: 10px;
    padding: 10px;
    border: none;
    transition: 0.3s;
  }

  .custom-btn:hover {
    background: linear-gradient(135deg, #146c43, #0f5132);
  }

 .custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* MAIN BOX */
.modal-box {
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  width: 85%;
  max-width: 1000px;
  position: relative;
  animation: zoom 0.3s ease;
}

/* IMAGE */
.img-wrapper {
  background: #f8fdfb;
  padding: 20px;
  border-radius: 15px;
}

.img-wrapper img {
  width: 100%;
  height: 320px;
  object-fit: contain;
}

/* CLOSE */
.close {
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 26px;
  cursor: pointer;
}

/* SPEC BOX */
.spec-box {
  background: #f8fdfb;
  padding: 15px;
  border-radius: 10px;
}

/* GRID */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

/* ITEM */
.spec-item {
  background: #fff;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

/* ANIMATION */
@keyframes zoom {
  from { transform: scale(0.8); }
  to { transform: scale(1); }
}

.close {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 22px;
  cursor: pointer;
}

.quote-box {
  background: #f8fdfb;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #e0f2e9;
  animation: fadeIn 0.3s ease;
}

.back-btn {
  font-size: 13px;
  color: #198754;
  cursor: pointer;
  margin-bottom: 8px;
}

.back-btn:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

`}</style>
    </div>
  );
}