import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/layout/Header";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Prime from "./components/Prime";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* Redirect Users to Home page from "/" */}
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="username" element={<p>Welcome username!</p>}></Route>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/prime" element={<Prime />}></Route>
          {/* Has to be the last Route */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
