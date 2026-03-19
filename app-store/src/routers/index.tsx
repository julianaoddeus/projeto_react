import { Route, Routes } from "react-router";
import {ProtectedRoute} from './protected-route';

export const Routers = () => {
  return (
    <Routes>
      <Route>
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
