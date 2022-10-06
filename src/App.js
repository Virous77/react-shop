import "./App.css";
import {
  HomePage,
  CartPage,
  CheckoutPage,
  AboutPage,
  ErrorPage,
  ProductPage,
  SingleProductsPage,
} from "./pages/index";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainNavbar from "./components/layout/MainNavbar";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutePgae from "./pages/PrivateRoutePgae";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductsPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/check-out"
          element={<PrivateRoutePgae Component={CheckoutPage} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer className="foo" style={{ marginTop: "5rem" }} />
      <Navbar />
    </div>
  );
}

export default App;
