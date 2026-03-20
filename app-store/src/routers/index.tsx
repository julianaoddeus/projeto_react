import { Route, Routes } from "react-router";
import {ProtectedRoute} from './protected-route';
import Layout from "../_components/Layout";

export const Routers = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout/>}/>
        <Route path="/" element={<>Home</>} />        
        <Route path="/login" element={<>Login</>} />
        <Route path="/register" element={<></>} />
        <Route path="/products" element={<></>} />
        <Route path="/product/:id" element={<></>} />

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<>Carrinho</>} />
        </Route>
      </Route>
    </Routes>
  );
};
