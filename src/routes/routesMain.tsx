import { Route, Routes } from "react-router-dom";
import { CartListPopUp } from "../components/cartList/cartListPopUp";
import { Cart } from "../pages/cart";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<CartListPopUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
