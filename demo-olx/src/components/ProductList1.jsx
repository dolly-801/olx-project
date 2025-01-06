// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList1 = () => {
//   // State to store products
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the Django API when the component mounts
//     axios.get('http://127.0.0.1:8000/product/')
//       .then(response => {
//         setProducts(response.data);   // Store the fetched products in state   // Stop loading
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//       });
//   }, []); // Empty dependency array means this runs once when the component mounts


//   return (
//     <div className="container mt-5">
//       <h2>Product List</h2>
//       <div className="row">
//         {/* Map through the products and display them */}
//         {products.map((product => (
//           <div className="col-md-4" key={product.id}>
//             <div className="card mb-4 shadow-sm">
//               <img
//                 src={product.image_url} // Assuming you have a URL for product image
//                 className="card-img-top"
//                 alt={product.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 {/* <p className="card-text"><strong>${product.price}</strong></p> */}
//                 <a href="#" className="btn btn-primary">View Details</a>
//               </div>
//             </div>
//           </div>
//         )))}
//       </div>
//     </div>
//   );
// };

// export default ProductList1;
