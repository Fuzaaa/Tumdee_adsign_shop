import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Category.css"; // Only if you have other custom styles

function Category() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        "http://localhost:2000/api/product/getallProducts",
        { withCredentials: true }
      );
      setProducts(response.data);
      console.log(response.data);
    };

    fetchItems();
    console.log("item has been fetched");
  }, []);

  return (
    <div>
      <div className="category-header flex flex-col items-center"> {/* Added flex and items-center */}
        <h2 className="text-2xl relative inline-block"> {/* Center text */}
          BROWSE BY CATEGORY
          <div className="flex justify-end mt-1 space-x-1"> {/* Center the lines */}
            <div className="w-8 h-1 bg-red-500 -mt-0.5 ml-2"></div>
            <div className="w-2 h-1 bg-black -mt-0.5"></div>
          </div>
        </h2>
      </div>

      {products.length > 0 ? (
        <ul className="product-ul">
          {products.map((item) => (
            <Link
              to={`/productdetail/${item.product_id}`}
              key={item.product_id}
            >
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="img-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                          <img
                            src="https://degqkf7c4iqz7.cloudfront.net/joyprinto/images/product/ST0128.jpg"
                            alt=""
                            className="card-img"
                          />
                        </div>
                      </div>

                      <div className="card-content">
                        <h2 className="product-name">{item.product_name}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Category;

// import React from 'react'
// import { useState, useEffect } from 'react'
// import './Category.css'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function Category() {

//   const [products, Setproducts] = useState([])

//   useEffect(() => {
//     const fetchItems = async () => {
//       const response = await axios.get('http://localhost:2000/api/product/getallProducts', {}, { withCredentials: true })
//       Setproducts(response.data)
//       console.log(response.data)
//     }

//     fetchItems()
//     console.log('item has been fetch')
//   }, [])


//   return (
//     <div > 
//     <div className="category-header">
//       <h2>BROWSE BY CATEGORY</h2>
//     </div>
      
//     {products.length > 0 ? ( <ul className='product-ul'>
//       {products.map(item => (
//       <Link to={`/productdetail/${item.product_id}`}>
//       <div className="slide-container">
//           <div className="slide-content">
//             <div className="card-wrapper">
//               <div className="card">

//                 <div className="img-content">
//                   <span className='overlay'></span>

//                   <div className="card-image">
//                     <img src="https://degqkf7c4iqz7.cloudfront.net/joyprinto/images/product/ST0128.jpg" alt="" className='card-img'/>
//                   </div>
//                 </div>

//                 <div className="card-content">
//                     <h2 className='product-name'>{item.product_name}</h2>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//         </Link> 
//     ))}
//      </ul>):( <p></p> )}
      
//     </div>
//   )
// }

// export default Category