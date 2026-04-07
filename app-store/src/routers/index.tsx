import { Route, Routes } from "react-router";
import { ProtectedRoute } from "./protected-route";
import Layout from "../_components/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Products from "../pages/Products";
import ProductDetailPage from '../pages/ProductDatails';

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:documentId" element={<ProductDetailPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<>Carrinho</>} />
        </Route>
      </Route>
    </Routes>
  );
};
