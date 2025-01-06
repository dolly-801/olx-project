// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const baseURL = "http://127.0.0.1:8000";  // Assuming this is the base URL of your backend

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/product/")
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       {/* Product List */}
//       <div className="row row-cols-1 row-cols-md-2 g-4">
//         {/* Map through the products and display them */}
//         {products.map((product) => (
//           <div className="col" key={product.id}>
//             <div className="card custom-card mb-4 shadow-sm">
//               <img
//                 src={`${baseURL}${product.image}`} // Construct the full URL for the image
//                 alt={product.title} // Use the product title for alt text
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <a href="#" className="btn btn-primary">View Details</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/product/")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      {/* Product List */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* Map through the products and display them */}
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card custom-card mb-4 shadow-sm">
              <img
                src={product.image} // Assuming you have a URL for product image
                className="card-img-top"
              // alt={product.title} // It's a good practice to use the title for the alt text
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                {/* <p className="card-text"><strong>${product.price}</strong></p> */}
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    // <div className="container mt-5">
    //   {/* <h2>Product List</h2> */}
    //   <div className="row">
    //     {/* Map through the products and display them */}
    //     {products.map((product => (
    //       <div className="col-md-4" key={product.id}>
    //         <div className="card custom-card mb-4 shadow-sm">
    //           <img
    //             src={product.image} // Assuming you have a URL for product image
    //             className="card-img-top"
    //             // alt={product.title}
    //           />
    //           <div className="card-body">
    //             <h5 className="card-title">{product.title}</h5>
    //             <p className="card-text">{product.description}</p>
    //             {/* <p className="card-text"><strong>${product.price}</strong></p> */}
    //             <a href="#" className="btn btn-primary">View Details</a>
    //           </div>
    //         </div>
    //       </div>
    //     )))}
    //   </div>
    // </div>
  );
};

export default ProductList;