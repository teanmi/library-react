import Nav from "./components/Nav"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  
  function removeBookFromCart(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
    console.log(book);
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} changeQuantity={changeQuantity}
              removeBookFromCart={removeBookFromCart} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
