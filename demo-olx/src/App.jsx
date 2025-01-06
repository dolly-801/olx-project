import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
// import Register from './components/Register';

function App() {
  const [filterItems, setFilterItems] = useState([]);
  const [wishList, setWish] = useState([]);
  const [cart, setCart] = useState([]);  // Add cart state

  const filterItemsByTitle = async (e) => {
    const searchValue = e.target.value;
    try {
      const response = await fetch(`http://127.0.0.1:8000/filter/?title=${searchValue}`);
      const filteredData = await response.json();
      setFilterItems(filteredData);
    } catch (error) {
      console.error("Error filtering items:", error);
    }
  };

  const filterItemsByClick = async (category) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/filter/?title=${category}`);
      const filteredData = await response.json();
      setFilterItems(filteredData);
    } catch (error) {
      console.error("Error filtering items:", error);
    }
  };

  const addToWishList = (item) => {
    if (!wishList.some(wishItem => wishItem.id === item.id)) {
      setWish([...wishList, item]);
    }
  };

  const addToCart = (item) => {
    if (!cart.some(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  return (
    <div className="App">
      <div id='main-div' className="p-3 mb-2 text-primary-emphasis">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">OLX</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Register</a>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input onChange={filterItemsByTitle} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        {/* <Register />
        <Login></Login> */}

        <div className='belownav'>
          <br /><br />
          <button onClick={() => filterItemsByClick("shirts")}>Shirt</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => filterItemsByClick("pants")}>Pant</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => console.log('Show more clicked')}>Show more</button>
        </div>

        <br /><br />

        <div className="container mt-5">
          {/* Filtered Items */}
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filterItems.map((item) => (
              <div key={item.id} className="col">
                <div className="card custom-card mb-4 shadow-sm">
                  <img
                    src={item.image} // Assuming `item.image` holds the image URL
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                    <button onClick={() => addToWishList(item)} className="btn btn-secondary">Add to WishList</button><br /><br />
                    <button onClick={() => addToCart(item)} className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProductList />

        <div className="app-layout container mt-5">
          {/* Left Section: WishList and Right Section: Cart */}
          <div className="row">
            {/* Wishlist Section */}
            <div className="wishlist-container col-md-6">
              {wishList.length > 0 && <h1>WishList</h1>} {/* Conditionally render the heading */}
              <div className="row row-cols-1 row-cols-md-1 g-4">
                {/* Map through the items in the WishList and display them as cards */}
                {wishList.map((item) => (
                  <div key={item.id} className="col">
                    <div className="card custom-card mb-4 shadow-sm">
                      <img
                        src={item.image} // Assuming item.image holds the image URL
                        className="card-img-top"
                      // alt={item.title} // It's good practice to use alt text for accessibility
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                        {/* <p className="card-text"><strong>Brand:</strong> {item.brand_name}</p> */}
                        <button className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>




        {/* Cart Section */}
        <div className="cart-container col-md-6">
          {cart.length > 0 && <h1>Cart</h1>} {/* Conditionally render the heading */}
          <div className="row row-cols-1 row-cols-md-1 g-4">
            {/* Map through the items in the cart and display them as cards */}
            {cart.map((item) => (
              <div key={item.id} className="col">
                <div className="card custom-card mb-4 shadow-sm">
                  <img
                    src={item.image} // Assuming item.image holds the image URL
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>


    //   </div >
    // </div >
  );
}

export default App;
