import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
function App() {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const products = [

    {
      id: 1,
      name: "Smart Watch",
      price: 999,
      quantity:1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 2,
      name: "Headphones",
      price: 1499,
      quantity:1 ,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      id: 3,
      name: "Shoes",
      price: 1999,
      quantity:1 ,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

  ];

  const addToCart = (product) => {

  setCartItems([
    ...cartItems,
    {
      ...product,
      quantity: 1
    }
  ]);

};

  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item, index) => index !== id
    );

    setCartItems(updatedCart);

  };
  const increaseQuantity = (index) => {

  const updatedCart = [...cartItems];

  updatedCart[index].quantity += 1;

  setCartItems(updatedCart);

};

const decreaseQuantity = (index) => {

  const updatedCart = [...cartItems];

  if (updatedCart[index].quantity > 1) {
    updatedCart[index].quantity -= 1;
  }

  setCartItems(updatedCart);

};

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  const totalPrice = cartItems.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);

  return (

    <BrowserRouter>

      <div
        style={{
          background: darkMode ? "#222" : "white",
          color: darkMode ? "white" : "black",
          minHeight: "100vh"
        }}
      >

        <Navbar
          cartCount={cartItems.length}
          search={search}
          setSearch={setSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={
              <Home
                products={products}
                addToCart={addToCart}
                search={search}
              />
            }
          />

          <Route
       path="/cart"
       element={
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      totalPrice={totalPrice}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />

  }
  />
   <Route
  path="/product/:id"
  element={
    <ProductDetail
      addToCart={addToCart}
    />
  }
/>
       

<Route
  path="/checkout"
  element={<Checkout />}
/>

 </Routes>

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;