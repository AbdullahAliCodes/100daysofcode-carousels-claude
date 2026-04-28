import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

// what we want
// ourdomain.com/ -> home screen or home component
// ourdomain.com/products -> products list component
