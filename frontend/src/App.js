import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:5001"}/api/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-4">
      <h1 className="text-center">Products</h1>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <div className="card p-3 mb-3">
              <img src={p.image} alt="" />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;