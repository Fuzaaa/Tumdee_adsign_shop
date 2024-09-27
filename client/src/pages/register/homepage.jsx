import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Category from "../../components/Category/Category";
import Navbar from "../../components/Navbar/navbar";
import "./homepage.css";

function Homepage() {
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const storedName = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");
  useEffect(() => {
    if (storedName) {
      setName(storedName.cus_name);
    }
  }, []);

  const [inputs, setInputs] = useState({
    product_id: "",
    qty: "",
  });

  const navigator = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:2000/api/cart/addtocart", inputs, {
        withCredentials: true,
      });
      console.log("Product has been added in your cart", inputs);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="header-homepage-container">
      <div className="w-full overflow-hidden mt-20">
          <img src="/images/cover.png" alt="Cover" className="w-full h-auto" />
        </div>
        <div className="header-homepage-content">
          <h1 className="text-red-400">Homepage</h1>
          <div className="logo-container flex justify-center">
          </div>
        </div>
      </div>

      <div className="main-homepage-content flex justify-center">
        <Category />
      </div>
    </>
  );
}

export default Homepage;
